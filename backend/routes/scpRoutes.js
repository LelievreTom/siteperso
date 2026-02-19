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

// ➜ Voir un SCP spécifique
router.get("/:numero", async (req, res) => {
  const scp = await Scp.findOne({ numero: req.params.numero });
  res.json(scp);
});

module.exports = router;
