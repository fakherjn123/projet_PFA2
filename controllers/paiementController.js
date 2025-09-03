const paiementService = require("../service/paiementService");

module.exports.getAllPaiements = async (req, res) => {
    try {
        const paiements = await paiementService.getAllPaiements();
        res.status(200).json({ paiements });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports.createPaiement = async (req, res) => {
    try {
        const paiement = await paiementService.createPaiement(req.body);
        res.status(201).json({ paiement });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
