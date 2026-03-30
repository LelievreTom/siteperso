import { useState, useEffect } from "react";
import Ball from "../assets/ball.png";
import pokemonsData from "./data/pokemons.json";
import categories from "./data/categories";

const columns = [
  ["Kanto", "Johto"],
  ["Hoenn", "Sinnoh"],
  ["Unova", "Kalos", "Mega Evolutions"],
  ["Alola", "Unknown", "Galar", "Gigantamax"],
  ["Hisui", "Paldea"],
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

  const getCategoryByName = (name) =>
    categories.find(cat => cat.name === name && (selectedGens.includes(cat.gen) || !start));

  const displayCategories = selectedGens.length > 0
    ? categories.filter(cat => selectedGens.includes(cat.gen))
    : categories;

  const allDisplayedIds = displayCategories.flatMap(cat => cat.ids);
  const totalPokemons = allDisplayedIds.length;
  const foundNormalCount = allDisplayedIds.filter(id => revealed[id]).length;

  const getRandomHint = () => {
    const hiddenIds = allDisplayedIds.filter(id => !revealed[id]);
    if(hiddenIds.length === 0){
      alert("Bravo, tu as tout trouvé !");
      return;
    }
    const randomId = hiddenIds[Math.floor(Math.random() * hiddenIds.length)];
    setHintId(randomId);
  }

  // ÉCRAN DE CONFIGURATION (CLAIR)
  if (!start) {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col items-center justify-center p-6">
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl max-w-4xl w-full text-center">
          <h1 className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Configuration du Pokédex
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {categories.map((gen) => (
              <button
                key={gen.name}
                onClick={() => toggleGen(gen.gen)}
                className={`transition-all duration-200 px-4 py-3 rounded-xl font-medium border ${
                  selectedGens.includes(gen.gen)
                    ? "bg-indigo-600 border-indigo-400 text-white shadow-lg scale-105"
                    : "bg-white border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 text-slate-600"
                }`}
              >
                {gen.name}
              </button>
            ))}
          </div>
          <button
            onClick={() => setStart(true)}
            disabled={selectedGens.length === 0}
            className="px-12 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-2xl font-bold text-xl shadow-lg hover:shadow-emerald-200 hover:scale-105 transition-all disabled:opacity-30 disabled:grayscale"
          >
            Initialiser le Quiz
          </button>
        </div>
      </div>
    );
  }

  // PAGE PRINCIPALE (CLAIR)
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 p-4 md:p-8">
      {/* Header collant */}
      <div className="sticky top-4 z-50 flex flex-col items-center gap-4 mb-12">
        <div className="bg-white/80 backdrop-blur-lg shadow-xl border border-white/50 px-8 py-4 rounded-3xl flex flex-col md:flex-row items-center gap-6 w-full max-w-2xl">
          <div className="flex flex-col items-center md:items-start shrink-0">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Progression</span>
            <span className="text-2xl font-black text-indigo-600">
              {foundNormalCount} <span className="text-slate-300 font-light">/</span> {totalPokemons}
            </span>
          </div>
          <div className="flex-1 flex gap-2 w-full">
            <input
              type="text"
              placeholder="Nom du Pokémon..."
              value={search}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 px-5 py-3 rounded-2xl bg-slate-100 border border-transparent focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-slate-900 placeholder:text-slate-400"
            />
            <button
              onClick={handleSearch}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-2xl font-bold transition-colors shadow-md"
            >
              Valider
            </button>
          </div>
        </div>
      </div>

      {/* Grille de 5 colonnes */}
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-start">
        {columns.map((col, colIdx) => {
          const visibleCats = col.map(name => getCategoryByName(name)).filter(Boolean);
          
          return (
            <div key={colIdx} className="flex flex-col gap-4">
              {visibleCats.map((cat) => (
                <div key={cat.name} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm h-fit">
                  <div className="bg-slate-50 px-4 py-2 border-b border-slate-100">
                    <h3 className="font-bold text-slate-500 text-xs text-center uppercase tracking-widest">
                      {cat.name}
                    </h3>
                  </div>
                  
                  <div className="p-3 grid grid-cols-10 gap-1 justify-center">
                    {cat.ids.map((pokedexId) => {
                      const found = pokemonsData.find(p => p.id === pokedexId);
                      const isRevealed = revealed[pokedexId];
                      
                      let spriteSrc = Ball;
                      if(isRevealed && found){
                        if(cat.gen === "gmax") spriteSrc = found.sprites.gmax?.regular || found.sprites.regular;
                        else if(cat.gen === "mega") spriteSrc = found.mega ? found.mega[megaIndex[pokedexId] ?? 0]?.sprites.regular : found.sprites.regular;
                        else spriteSrc = found.sprites.regular;
                      }

                      return (
                        <div key={pokedexId} className="w-5 h-5 flex items-center justify-center">
                          <img 
                            src={spriteSrc} 
                            alt="pkmn" 
                            title={isRevealed && found ? found.name : `???`}
                            className={`w-full h-full object-contain transition-all duration-300 ${isRevealed ? "scale-110" : "opacity-10 grayscale brightness-0"}`}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>

      {/* Footer Assistance */}
      <div className="mt-20 flex flex-col items-center gap-6 pb-12">
        <button
          onClick={getRandomHint}
          className="flex items-center gap-3 px-8 py-3 bg-white border border-slate-200 rounded-2xl hover:bg-slate-50 transition-all font-bold text-slate-700 shadow-md"
        >
          <span className="text-indigo-500">❓</span> Indices Silhouettes
        </button>

        {hintId && !revealed[hintId] && (
          <div className="flex flex-col items-center animate-bounce bg-white p-6 rounded-3xl border border-indigo-100 shadow-xl">
            <img 
              src={pokemonsData.find(p => p.id === hintId)?.sprites.regular} 
              className="w-20 h-20 object-contain brightness-0 opacity-20" 
              alt="Indice"
            />
          </div>
        )}
      </div>
    </div>
  );
}