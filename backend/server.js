const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const scpRoutes = require("./routes/scpRoutes");
require("dotenv").config({ path: require("path").join(__dirname, ".env") });

const app = express();
const PORT = process.env.PORT || 5000; // Render impose son port via PORT

// Seuls ces sites peuvent appeler l'API depuis un navigateur
app.use(cors({
  origin: ["https://tomlelievre.fr", "https://www.tomlelievre.fr", "http://localhost:5173", "http://localhost:4173"],
}));
app.use(express.json());
app.use("/scp", scpRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connecté"))
  .catch(err => console.log("❌ Erreur MongoDB:", err));

app.get("/", (req, res) => {
  res.send("API SCP active");
});

app.listen(PORT, (err) => {
  if (err) throw err; // ex: port déjà utilisé
  console.log(`Serveur lancé sur port ${PORT}`);
});
