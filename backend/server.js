const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const scpRoutes = require("./routes/scpRoutes");
require("dotenv").config({ path: require("path").join(__dirname, ".env") });

const app = express();

app.use(cors());
app.use(express.json());
app.use("/scp", scpRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connecté"))
  .catch(err => console.log("❌ Erreur MongoDB:", err));

app.get("/", (req, res) => {
  res.send("API SCP active");
});

app.listen(5000, (err) => {
  if (err) throw err; // ex: port 5000 déjà utilisé
  console.log("Serveur lancé sur port 5000");
});
