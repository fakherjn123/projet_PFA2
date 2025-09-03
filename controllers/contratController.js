const Contrat = require("../models/contratModel");

exports.createContrat = async (req, res) =>{

    try {
        const contrat = new Contrat(req.body);
        const saved = await contrat.save();
        res.status(200).json(saved);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getAllContrats = async (req, res) => {
  try {
    const contrats = await Contrat.find()
      .populate("client", "firstname lastname email")
      .populate("voiture", "marque modele");
    res.json(contrats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getContratById = async (req, res) => {
  try {
    const contrat = await Contrat.findById(req.params.id)
      .populate("client", "firstname lastname email")
      .populate("voiture", "marque modele");
    if (!contrat) return res.status(200).json({ message: "Contrat non trouvé" });
    res.json(contrat);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateContrat = async (req, res) => {
  try {
    const updated = await Contrat.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteContrat = async (req, res) => {
  try {
    await Contrat.findByIdAndDelete(req.params.id);
    res.json({ message: "Contrat supprimé" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};