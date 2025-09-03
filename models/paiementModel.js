const mongoose = require('mongoose');

const PaiementSchema = new mongoose.Schema({
    contrat: { type: mongoose.Schema.Types.ObjectId, ref: 'Contrat', required: true },
    montant: { type: Number, required: true, min: 0 },
    mode: { type: String, enum: ['carte', 'cash'], required: true },
    statut: { type: String, enum: ['payé', 'en attente'], default: 'en attente' },
    datePaiement: { type: Date, default: Date.now },
    reference: { type: String, trim: true }
}, { timestamps: true });

module.exports = mongoose.model('paiement', PaiementSchema);
