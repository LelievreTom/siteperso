const router = require("express").Router();
const Scp = require("../models/Scp");


// ➜ Ajouter un SCP
router.post("/", async (req, res) => {
  const scp = new Scp(req.body);
  await scp.save();
  res.json(scp);
});


// ➜ Voir tous les SCP
router.get("/", async (req, res) => {
  const scps = await Scp.find();
  res.json(scps);
});


// ➜ Voir tous les SCP d'une série (ex: 1-999)
router.get("/series/:serie", async (req, res) => {
  try {
    const [start, end] = req.params.serie.split("-");

    const scps = await Scp.find({
      numero: {
        $gte: start,
        $lte: end
      }
    }).sort({ numero: 1 });

    res.json(scps);
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur", error: err });
  }
});


// ➜ Voir un SCP spécifique
router.get("/:numero", async (req, res) => {
  const scp = await Scp.findOne({ numero: req.params.numero });

  if (!scp) return res.status(404).json({ message: "SCP introuvable" });

  res.json(scp);
});

module.exports = router;