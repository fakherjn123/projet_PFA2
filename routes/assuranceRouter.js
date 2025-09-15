
const express = require("express");
const router = express.Router();
const assuranceController = require("../controllers/assuranceController");

router.get("/getAllassurances", assuranceController.getAllassurances);
router.post("/createassurance", assuranceController.createassurance);
router.get("/getassuranceById/:id", assuranceController.getassuranceById);
router.put("/updateassurance/:id", assuranceController.updateassurance);
router.delete("/deleteassurance/:id", assuranceController.deleteassurance);

module.exports = router;