const assuranceService = require("../service/assuranceService");

module.exports.getAllassurances = async (req, res) => {
    try {
        const assurances = await assuranceService.getAllassurances();
        res.status(200).json({ assurances });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports.createassurance = async (req, res) => {
    try {
        const assurance = await assuranceService.createassurance(req.body);
        res.status(201).json({ assurance });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports.getassuranceById = async (req, res) => {
    try {
        const { id } = req.params;
        const assurance = await assuranceService.getassuranceById(id);
        if (!assurance) return res.status(404).json({ message: "assurance introuvable" });
        res.status(200).json({ assurance });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports.updateassurance = async (req, res) => {
    try {
        const { id } = req.params;
        const updated = await assuranceService.updateassurance(id, req.body);
        if (!updated) return res.status(404).json({ message: "assurance introuvable" });
        res.status(200).json({ assurance: updated });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports.deleteassurance = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await assuranceService.deleteassurance(id);
        if (!deleted) return res.status(404).json({ message: "assurance introuvable" });
        res.status(200).json({ message: "assurance supprimée" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
