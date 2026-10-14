const mongoose = require("mongoose");

const ScpSchema = new mongoose.Schema({
  numero: String,
  titre: String,
  classe: String,
  niveau: Number,
  procedures: String,
  description: String,
  // Rapports d'incident, journaux de tests, entretiens…
  annexes: [{ _id: false, titre: String, contenu: String }],
  // src = chemin dans public/ (ex: /images/scp/photos/173.jpg)
  images: [{ _id: false, src: String, legende: String, type: { type: String, enum: ["photo", "plan"] } }],
  dateCreation: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Scp", ScpSchema);
