const assurance = require("../models/assuranceModel");

module.exports = {
    async getAllassurances() {
        return assurance.find().populate("contrat");
    },

    async getassuranceById(id) {
        return assurance.findById(id).populate("contrat");
    },

    async createassurance(data) {
        const assurance = new assurance(data);
        return assurance.save();
    },

    async updateassurance(id, data) {
        return assurance.findByIdAndUpdate(id, data, { new: true });
    },

    async deleteassurance(id) {
        return assurance.findByIdAndDelete(id);
    },
};