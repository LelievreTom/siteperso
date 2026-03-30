import { useState, useEffect } from "react";
import Ball from "../assets/ball.png";
import pokemonsData from "./data/pokemons.json";
//import pokemonsData from "../../public/pokemons.json";
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

  const getCategoryByName = (name) =>
    categories.find(cat => cat.name === name && (selectedGens.includes(cat.gen) || !start));

  const normalizeString = (str) =>
    str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

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
      setSearch("");
    } else {
      alert("Pokémon introuvable !");
    }
  };

  // Inclut toutes les catégories sélectionnées (ou toutes si pas de filtre)
  const displayCategories = selectedGens.length > 0
    ? categories.filter(cat => selectedGens.includes(cat.gen))
    : categories;

  // Liste de tous les IDs visibles
  const allDisplayedIds = displayCategories.flatMap(cat => cat.ids);

  // Compteur
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
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center gap-6">
        <h1 className="text-3xl font-bold">Choisis tes générations</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((gen) => (
            <button
              key={gen.name}
              onClick={() => toggleGen(gen.gen)}
              className={`px-4 py-2 rounded-md border ${
                selectedGens.includes(gen.gen)
                  ? "bg-purple-600 border-purple-400"
                  : "bg-gray-700 border-gray-500"
              }`}
            >
              {gen.name}
            </button>
          ))}
        </div>
        <button
          onClick={() => setStart(true)}
          disabled={selectedGens.length === 0}
          className="px-6 py-3 bg-green-600 rounded-lg font-bold hover:bg-green-500 disabled:opacity-40"
        >
          Commencer le quiz
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-800 text-white p-8">
      {/* Compteur */}
      <div className="text-center mb-4 text-xl font-bold">
        {foundNormalCount} / {totalPokemons} Pokémon trouvés
      </div>

      {/* Barre de recherche */}
      <div className="flex justify-center mb-6 gap-2">
        <input
          type="text"
          placeholder="Nom du Pokémon..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-3 py-2 rounded-md text-black"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-500"
        >
          Valider
        </button>
      </div>

      {/* Grille */}
      <div className="flex justify-center gap-8">
        {columns.map((col, colIdx) => (
          <div key={colIdx} className="flex flex-col gap-4">
            {col.map((catName) => {
              const cat = getCategoryByName(catName);
              if (!cat) return null;

              return (
                <div key={cat.name} className="bg-black p-2 rounded-md">
                  <h3 className="text-center font-bold mb-2">{cat.name}</h3>
                  <div className="grid grid-cols-10 gap-1 justify-center">
                    {cat.ids.map((pokedexId) => {
                      const found = pokemonsData.find(p => p.id === pokedexId);
                      let spriteSrc = Ball;
                      if(revealed[pokedexId] && found){
                        if(cat.gen === "gmax"){
                          spriteSrc = found.sprites.gmax?.regular || found.sprites.regular;
                        }else if(cat.gen === "mega"){
                          spriteSrc = found.mega 
                                        ? found.mega[megaIndex[pokedexId] ?? 0]?.sprites.regular || found.sprites.regular 
                                        : found.sprites.regular; 
                        }else{
                          spriteSrc = found.sprites.regular;
                        }
                      }

                      return (
                        <div key={pokedexId} className="w-6 h-6 flex items-center justify center">
                            <img src={spriteSrc} alt={found?.name || `Pokeball #${pokedexId}`} className="w-6 h-6 object-contain"/>
                        </div>
                      )
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
