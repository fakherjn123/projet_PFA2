
const mongoose = require('mongoose');

const AssuranceSchema = new mongoose.Schema({
    contrat: { type: mongoose.Schema.Types.ObjectId, ref: 'contrat', required: true },
    type: { type: String, enum: ['vol', 'accident', 'tous risques'], required: true },
    dateDebut: { type: Date, required: true },
    dateFin: { type: Date, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Assurance', AssuranceSchema);