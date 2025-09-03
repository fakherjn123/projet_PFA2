
const reclamationService = require("../service/reclamationService");

module.exports.getAllReclamations = async (req, res) => {
    try {
        const reclamations = await reclamationService.getAllReclamations();
        res.status(200).json({ reclamations });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports.createReclamation = async (req, res) => {
    try {
        const reclamation = await reclamationService.createReclamation(req.body);
        res.status(200).json({ reclamation });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};