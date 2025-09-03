
const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
    Contrat: { type: mongoose.Schema.Types.ObjectId, ref: 'Contrat', required: true },
    montant: { type: Number, required: true },
    mode: { type: String, enum: ['carte', 'cash'], required: true },
    statut: { type: String, enum: ['payé', 'en attente'], default: 'en attente' }
}, { timestamps: true });

module.exports = mongoose.model('Payment', PaymentSchema);