const router = require("express").Router();
const Scp = require("../models/Scp");

const LIST_FIELDS = "numero titre classe niveau dateCreation";

const escapeRegex = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// numero est une String ("049", "173") : on trie numériquement, pas alphabétiquement
const sortByNumero = (scps) => scps.sort((a, b) => Number(a.numero) - Number(b.numero));


// ➜ Ajouter un SCP (réservé : header x-admin-key = ADMIN_KEY du .env)
router.post("/", async (req, res) => {
  if (!process.env.ADMIN_KEY || req.get("x-admin-key") !== process.env.ADMIN_KEY) {
    return res.status(401).json({ message: "Accès refusé" });
  }
  const { numero, titre, classe, niveau, procedures, description } = req.body;
  const scp = await Scp.create({ numero, titre, classe, niveau, procedures, description });
  res.status(201).json(scp);
});


// ➜ Voir tous les SCP, ou rechercher : /scp?q=statue ou /scp?q=173
router.get("/", async (req, res) => {
  const q = String(req.query.q ?? "").trim();
  const filter = q
    ? {
        $or: [
          { titre: { $regex: escapeRegex(q), $options: "i" } },
          { numero: { $regex: escapeRegex(q.replace(/^scp-?/i, "")) } },
        ],
      }
    : {};

  const scps = await Scp.find(filter, LIST_FIELDS).lean();
  res.json(sortByNumero(scps));
});


// ➜ Voir tous les SCP d'une série (ex: 1-999)
router.get("/series/:serie", async (req, res) => {
  const [start, end] = req.params.serie.split("-").map(Number);
  if (!Number.isInteger(start) || !Number.isInteger(end)) {
    return res.status(400).json({ message: "Série invalide" });
  }

  // shortcut: filtre en JS sur toute la collection, ok jusqu'à quelques milliers de fiches ; au-delà, passer numero en Number + index
  const scps = await Scp.find({}, LIST_FIELDS).lean();
  res.json(sortByNumero(scps.filter((s) => Number(s.numero) >= start && Number(s.numero) <= end)));
});


// ➜ Voir un SCP spécifique
router.get("/:numero", async (req, res) => {
  const scp = await Scp.findOne({ numero: req.params.numero }).lean();

  if (!scp) return res.status(404).json({ message: "SCP introuvable" });

  res.json(scp);
});

module.exports = router;
