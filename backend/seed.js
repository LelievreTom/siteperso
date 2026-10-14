// Ajoute ou met à jour les dossiers de backend/data/fiches.js : node backend/seed.js
// ⚠️ Pour les numéros présents dans fiches.js, le contenu en base est remplacé par celui du fichier
// (la date de création est conservée). Les autres fiches de la base ne sont pas touchées.
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env"), quiet: true });
const Scp = require("./models/Scp");
const fiches = require("./data/fiches");

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    const res = await Scp.bulkWrite(
      fiches.map((f) => ({
        updateOne: { filter: { numero: f.numero }, update: { $set: f }, upsert: true },
      }))
    );
    console.log(`${res.upsertedCount} fiche(s) ajoutée(s), ${res.modifiedCount} mise(s) à jour`);
  })
  .catch((err) => {
    console.error("❌ Erreur :", err.message);
    process.exitCode = 1;
  })
  .finally(() => mongoose.disconnect());
