const mongoose = require('mongoose');

const ContratSchema = new mongoose.Schema({
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    voiture: { type: mongoose.Schema.Types.ObjectId, ref: 'Car', required: true },
    type: { type: String, enum: ['vente', 'location'], required: true },
    dateDebut: { type: Date },
    dateFin: { type: Date },
    statut: { type: String, enum: ['en cours', 'terminé', 'annulé'], default: 'en cours' }
}, { timestamps: true });

module.exports = mongoose.model('contrat', ContratSchema);