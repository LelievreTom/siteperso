import fs from "fs";
import fetch from "node-fetch";

async function fetchPokemons() {
  const maxId = 1025;

  const pokemons = await Promise.all(
    Array.from({ length: maxId }, async (_, i) => {
      const id = i + 1;
      try {
        const res = await fetch(`https://tyradex.vercel.app/api/v1/pokemon/${id}`);
        if (!res.ok) {
          console.warn(`⚠️ Pokémon ${id} introuvable`);
          return null;
        }
        const details = await res.json();

        return {
          id: details.pokedex_id,
          name: details.name.fr,
          name_en: details.name.en,
          name_jp: details.name.jp, 
          sprites: {
            regular: details.sprites?.regular || null,
            shiny: details.sprites?.shiny || null,
            gmax: details.sprites?.gmax || null
          },
          mega: details.evolution?.mega || null,
          types: details.types?.map(t => ({
            name: t.name,
            image: t.image
          })) || []
        };
      } catch (err) {
        console.error(`❌ Erreur pour le Pokémon ${id}:`, err);
        return null;
      }
    })
  );

  const cleanData = pokemons.filter(p => p !== null);

  fs.writeFileSync("public/pokemons.json", JSON.stringify(cleanData, null, 2));
  console.log("✅ pokemons.json généré avec TyraDex + types !");
}

fetchPokemons();