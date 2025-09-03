const Reclamation = require("../models/reclamationModel");

module.exports = {
    async getAllReclamations() {
        return await Reclamation.find().populate("client").populate("Contrat");
    },

    async createReclamation(data) {
        return await Reclamation.create(data);
    }
};
