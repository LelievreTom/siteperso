const mongoose = require("mongoose");

const ScpSchema = new mongoose.Schema({
  numero: String,
  titre: String,
  classe: String,
  niveau: Number,
  procedures: String,
  description: String,
  dateCreation: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Scp", ScpSchema);
