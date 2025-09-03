
const express = require("express");
const router = express.Router();
const paiementController = require("../controllers/paiementController");

router.get("/getAllPaiements", paiementController.getAllPaiements);
router.post("/createPaiement", paiementController.createPaiement);

module.exports = router;