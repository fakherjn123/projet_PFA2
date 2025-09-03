
const express = require("express");
const router = express.Router();
const assuranceController = require("../controllers/assurenceController");

router.get("/getAllAssurances", assuranceController.getAllAssurances);
router.post("/createAssurance", assuranceController.createAssurance);
router.get("/getAssuranceById/:id", assuranceController.getAssuranceById);
router.put("/updateAssurance/:id", assuranceController.updateAssurance);
router.delete("/deleteAssurance/:id", assuranceController.deleteAssurance);

module.exports = router;