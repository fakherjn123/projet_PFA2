const Paiement = require("../models/paiementModel");
module.exports = {
    async getAllPaiements() {
        return await Paiement.find();
    },

    async createPaiement(data) {
        return await Paiement.create(data);
    }
};