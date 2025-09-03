
const express = require("express");
const router = express.Router();
const reclamationController = require("../controllers/reclamationController");

router.get("/getAllReclamations", reclamationController.getAllReclamations);
router.post("/createReclamation", reclamationController.createReclamation);

module.exports = router;