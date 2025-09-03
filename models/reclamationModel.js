const mongoose = require('mongoose');

const ReclamationSchema = new mongoose.Schema({
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    contrat: { type: mongoose.Schema.Types.ObjectId, ref: 'Contrat' },
    description: { type: String, required: true, trim: true },
    statut: { 
        type: String, 
        enum: ['ouverte', 'en cours', 'résolue', 'rejetée'], 
        default: 'ouverte' 
    },
    priorite: { 
        type: String, 
        enum: ['basse', 'moyenne', 'haute'], 
        default: 'moyenne' 
    },
    dateReclamation: { type: Date, default: Date.now },
    piecesJointes: [{ type: String }]
}, { timestamps: true });

module.exports = mongoose.model('Reclamation', ReclamationSchema);
