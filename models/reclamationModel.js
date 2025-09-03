
const mongoose = require('mongoose');

const ReclamationSchema = new mongoose.Schema({
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    Contrat: { type: mongoose.Schema.Types.ObjectId, ref: 'Contrat' },
    description: { type: String, required: true },
    dateReclamation: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('Reclamation', ReclamationSchema);