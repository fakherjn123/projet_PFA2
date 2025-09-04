const mongoose = require('mongoose');
const Contrat = require("../models/contratModel");

const ReclamationSchema = new mongoose.Schema({
    client: { type: String, required: true },
    contrat: { type: mongoose.Schema.Types.ObjectId, ref: 'Contrat' },
    description: { type: String, required: true, trim: true },
    statut: { 
        type: String, 
        enum: ['ouverte', 'en cours', 'résolue', 'rejetée'], 
        default: 'ouverte' 
    },
    
    dateReclamation: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('Reclamation', ReclamationSchema);
