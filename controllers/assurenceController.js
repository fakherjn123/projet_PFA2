const assuranceService = require("../service/assurenceService");

module.exports.getAllAssurances = async (req, res) => {
    try {
        const assurances = await assuranceService.getAllAssurances();
        res.status(200).json({ assurances });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports.createAssurance = async (req, res) => {
    try {
        const assurance = await assuranceService.createAssurance(req.body);
        res.status(201).json({ assurance });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports.getAssuranceById = async (req, res) => {
    try {
        const { id } = req.params;
        const assurance = await assuranceService.getAssuranceById(id);
        if (!assurance) return res.status(404).json({ message: "Assurance introuvable" });
        res.status(200).json({ assurance });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports.updateAssurance = async (req, res) => {
    try {
        const { id } = req.params;
        const updated = await assuranceService.updateAssurance(id, req.body);
        if (!updated) return res.status(404).json({ message: "Assurance introuvable" });
        res.status(200).json({ assurance: updated });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports.deleteAssurance = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await assuranceService.deleteAssurance(id);
        if (!deleted) return res.status(404).json({ message: "Assurance introuvable" });
        res.status(200).json({ message: "Assurance supprimée" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
