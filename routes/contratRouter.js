
const express = require('express');
const router = express.Router();
const contratController = require('../controllers/contratController');

router.post("/createContrat", contratController.createContrat);
router.get("/getAllContrat", contratController.getAllContrats);
router.get("/getContratById/:id", contratController.getContratById);
router.put("/updateContrat/:id", contratController.updateContrat);
router.delete("/deleteContrat/:id", contratController.deleteContrat);

module.exports = router;