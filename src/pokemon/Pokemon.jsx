import { useState, useEffect } from "react";
import Ball from "../assets/ball.png";
import pokemonsData from "./data/pokemons.json";
import categories from "./data/categories";

const columns = [
  ["Kanto", "Johto"],
  ["Hoenn", "Sinnoh"],
  ["Unova", "Kalos", "Mega Evolutions"],
  ["Alola", "Unknown", "Galar", "Gigantamax"],
  ["Hisui", "Paldea", "Paldea Expeditions"],
];

export default function PokemonPage() {
  const [selectedGens, setSelectedGens] = useState([]);
  const [start, setStart] = useState(false);
  const [revealed, setRevealed] = useState({});
  const [search, setSearch] = useState("");
  const [megaIndex, setMegaIndex] = useState({});
  const [hintId, setHintId] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setMegaIndex((prev) => {
        const newIndex = { ...prev };
        Object.keys(revealed).forEach((id) => {
          const found = pokemonsData.find(p => p.id === parseInt(id));
          if (found?.mega?.length > 1) {
            newIndex[id] = (prev[id] ?? 0) === 0 ? 1 : 0;
          }
        });
        return newIndex;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [revealed]);

  const toggleGen = (id) => {
    if (id === "all") {
      if (selectedGens.length === categories.length - 1) {
        setSelectedGens([]); 
      } else {
        setSelectedGens(categories.filter((c) => c.gen !== "all").map((c) => c.gen));
      }
    } else {
      setSelectedGens((prev) =>
        prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id]
      );
    }
  };

  const normalizeString = (str) =>
    str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  const handleSearch = () => {
    const searchNorm = normalizeString(search);
    const found = pokemonsData.find(
      (p) =>
        normalizeString(p.name) === searchNorm ||
        normalizeString(p.name_en) === searchNorm ||
        normalizeString(p.name_jp) === searchNorm
    );
    if (found) {
      setRevealed((prev) => ({ ...prev, [found.id]: true }));
      if(found.id === hintId) setHintId(null);
      setSearch("");
    } else {
      alert("Pokémon introuvable !");
    }
  };

  const getRandomHint = () => {
    const hiddenIds = allDisplayedIds.filter(id => !revealed[id]);
    if(hiddenIds.length === 0){
      alert("Bravo, tu as tout trouvé !");
      return;
    }
    const randomId = hiddenIds[Math.floor(Math.random() * hiddenIds.length)];
    setHintId(randomId);
  }

  const getCategoryByName = (name) =>
    categories.find(cat => cat.name === name && (selectedGens.includes(cat.gen) || !start));

  const displayCategories = selectedGens.length > 0
    ? categories.filter(cat => selectedGens.includes(cat.gen))
    : categories;

  const allDisplayedIds = displayCategories.flatMap(cat => cat.ids);
  const totalPokemons = allDisplayedIds.length;
  const foundNormalCount = allDisplayedIds.filter(id => revealed[id]).length;

/*
  useEffect(() => {
    if (!start) return;

    const allIds = {};
    pokemonsData.forEach((p) => {
      allIds[p.id] = true;
    });

    setRevealed(allIds);
  }, [start]);
*/

  if (!start) {
    return (
      <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-700 via-slate-900 to-black text-white flex flex-col items-center justify-center p-6">
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-2xl max-w-4xl w-full">
          <h1 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Configuration du Pokédex
          </h1>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {categories.map((gen) => (
              <button
                key={gen.name}
                onClick={() => toggleGen(gen.gen)}
                className={`transition-all duration-200 px-4 py-3 rounded-xl font-medium border ${
                  selectedGens.includes(gen.gen)
                    ? "bg-purple-600 border-purple-400 shadow-[0_0_15px_rgba(147,51,234,0.5)] scale-105"
                    : "bg-slate-800/50 border-slate-600 hover:bg-slate-700 text-slate-300"
                }`}
              >
                {gen.name}
              </button>
            ))}
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => setStart(true)}
              disabled={selectedGens.length === 0}
              className="group relative px-12 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl font-bold text-xl shadow-lg hover:shadow-green-500/30 hover:scale-105 transition-all disabled:opacity-30 disabled:hover:scale-100"
            >
              Initialiser le Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 p-4 md:p-8">
      {/* Header */}
      <div className="sticky top-4 z-50 flex flex-col items-center gap-4 mb-12">
        <div className="bg-white/80 backdrop-blur-lg shadow-xl border border-slate-200 px-8 py-4 rounded-3xl flex flex-col md:flex-row items-center gap-6 w-full max-w-2xl">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Progression</span>
            <span className="text-2xl font-black text-blue-600">
              {foundNormalCount} <span className="text-slate-300 font-light">/</span> {totalPokemons}
            </span>
          </div>
          
          <div className="flex-1 flex gap-2 w-full">
            <input
              type="text"
              placeholder="Entrez un nom..."
              value={search}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 px-5 py-3 rounded-2xl bg-slate-100 border-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-800 placeholder:text-slate-400"
            />
            <button
              onClick={handleSearch}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-bold transition-colors shadow-lg shadow-blue-200"
            >
              OK
            </button>
          </div>
        </div>
      </div>

      {/* Grille de colonnes */}
      <div className="flex flex-wrap justify-center gap-6">
        {columns.map((col, colIdx) => (
          <div key={colIdx} className="flex flex-col gap-6 w-full md:w-[320px]">
            {col.map((catName) => {
              const cat = getCategoryByName(catName);
              if (!cat) return null;

              return (
                <div key={cat.name} className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                  <div className="bg-slate-50 px-4 py-3 border-b border-slate-100 flex justify-between items-center">
                    <h3 className="font-bold text-slate-700">{cat.name}</h3>
                    <span className="text-[10px] bg-slate-200 text-slate-500 px-2 py-0.5 rounded-full font-bold">
                       {cat.ids.length} PKMN
                    </span>
                  </div>
                  
                  <div className="p-4 grid grid-cols-8 gap-1.5 justify-center">
                    {cat.ids.map((pokedexId) => {
                      const found = pokemonsData.find(p => p.id === pokedexId);
                      const isRevealed = revealed[pokedexId];
                      
                      let spriteSrc = Ball;
                      if(isRevealed && found){
                        if(cat.gen === "gmax"){
                          spriteSrc = found.sprites.gmax?.regular || found.sprites.regular;
                        } else if(cat.gen === "mega"){
                          spriteSrc = found.mega 
                            ? found.mega[megaIndex[pokedexId] ?? 0]?.sprites.regular || found.sprites.regular 
                            : found.sprites.regular; 
                        } else {
                          spriteSrc = found.sprites.regular;
                        }
                      }

                      return (
                        <div 
                          key={pokedexId} 
                          className={`group relative w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-300 ${
                            isRevealed ? "bg-blue-50" : "bg-slate-100 opacity-40 hover:opacity-100"
                          }`}
                          title={isRevealed && found ? found.name : "???"}
                        >
                          <img 
                            src={spriteSrc} 
                            alt={found?.name} 
                            className={`w-7 h-7 object-contain transition-transform ${isRevealed ? "scale-110" : "grayscale"}`}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
      {/* Barre d'aide */}
      <div className="mt-12 flex flex-col items-center gap-6 border-t border-slate-200 pt-8">
        <h4 className="text-slate-400 font-bold uppercase tracking-widest text-xs">Outils d'aide</h4>
        
        <div className="flex flex-wrap justify-center gap-4">
          {/* Bouton Ombre Aléatoire */}
          <button
            onClick={getRandomHint}
            className="flex items-center gap-3 px-6 py-3 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all text-slate-700 font-medium group"
          >
            <span className="text-xl group-hover:rotate-12 transition-transform">❓</span>
            Afficher une ombre
          </button>
          
          {/* Tu pourras ajouter d'autres boutons ici plus tard */}
        </div>

        {/* Affichage de l'ombre si un indice est actif */}
        {hintId && !revealed[hintId] && (
          <div className="flex flex-col items-center animate-bounce">
            <div className="bg-white p-4 rounded-full shadow-xl border-2 border-blue-100">
              <img 
                src={pokemonsData.find(p => p.id === hintId)?.sprites.regular} 
                alt="Indice"
                className="w-20 h-20 object-contain brightness-0" // L'ombre est créée ici
              />
            </div>
            <p className="text-slate-400 text-sm mt-2 font-medium">Qui est-ce ?</p>
          </div>
        )}
      </div>
    </div>
  );
}