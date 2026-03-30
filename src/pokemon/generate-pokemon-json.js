import fs from "fs";
import fetch from "node-fetch";

const typeTranslations = {
  normal: "Normal", fire: "Feu", water: "Eau", electric: "Électrik", grass: "Plante",
  ice: "Glace", fighting: "Combat", poison: "Poison", ground: "Sol", flying: "Vol",
  psychic: "Psy", bug: "Insecte", rock: "Roche", ghost: "Spectre", dragon: "Dragon",
  steel: "Acier", fairy: "Fée", dark: "Ténèbres"
};

async function fetchPokemons() {
  const maxId = 1025;
  const allPokemons = [];
  const batchSize = 100;

  console.log("🚀 Début de la récupération par paquets...");

  for (let i = 1; i <= maxId; i += batchSize) {
    const end = Math.min(i + batchSize - 1, maxId);
    const batchArray = Array.from({ length: end - i + 1 }, (_, index) => i + index);

    console.log(`📦 Traitement de ${i} à ${end}...`);

    const batchResults = await Promise.all(
      batchArray.map(async (id) => {
        try {
          const [resData, resSpecies] = await Promise.all([
            fetch(`https://pokeapi.co/api/v2/pokemon/${id}`),
            fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
          ]);

          if (!resData.ok || !resSpecies.ok) return null;

          const data = await resData.json();
          const species = await resSpecies.json();

          const nameFr = species.names.find(n => n.language.name === "fr")?.name;
          const nameEn = species.names.find(n => n.language.name === "en")?.name;
          const nameJp = species.names.find(n => n.language.name === "ja")?.name;

          return {
            id: data.id,
            name: nameFr || data.name,
            name_en: nameEn || data.name,
            name_jp: nameJp || data.name,
            sprites: {
              regular: data.sprites.other['official-artwork'].front_default || data.sprites.front_default,
              shiny: data.sprites.other['official-artwork'].front_shiny || data.sprites.front_shiny,
              gmax: null
            },
            mega: null,
            types: data.types.map(t => ({
              name: typeTranslations[t.type.name] || t.type.name,
              image: `https://raw.githubusercontent.com/Yarkis01/TyraDex/main/src/assets/types/${t.type.name}.png`
            }))
          };
        } catch (err) {
          console.error(`❌ Erreur pour ID ${id}`);
          return null;
        }
      })
    );

    allPokemons.push(...batchResults.filter(p => p !== null));
    
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  if (!fs.existsSync("public")) fs.mkdirSync("public");
  fs.writeFileSync("public/pokemons.json", JSON.stringify(allPokemons, null, 2));
  
  console.log(`---`);
  console.log(`✅ Terminé ! ${allPokemons.length} Pokémon enregistrés dans public/pokemons.json`);
}

fetchPokemons();