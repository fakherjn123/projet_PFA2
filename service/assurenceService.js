const Assurance = require("../models/assurenceModel");

module.exports = {
    async getAllAssurances() {
        return Assurance.find().populate("contrat");
    },

    async getAssuranceById(id) {
        return Assurance.findById(id).populate("contrat");
    },

    async createAssurance(data) {
        const assurance = new Assurance(data);
        return assurance.save();
    },

    async updateAssurance(id, data) {
        return Assurance.findByIdAndUpdate(id, data, { new: true });
    },

    async deleteAssurance(id) {
        return Assurance.findByIdAndDelete(id);
    },
};