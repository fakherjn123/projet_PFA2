const mongoose = require('mongoose');

const ContratSchema = new mongoose.Schema({
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    voiture: { type: mongoose.Schema.Types.ObjectId, ref: 'Car', required: true },
    type: { type: String, enum: ['vente', 'location'], required: true },
    dateDebut: { type: Date, required: true },
    dateFin: { type: Date, required: true },
    statut: { type: String, enum: ['en cours', 'terminé', 'annulé'], default: 'en cours' }
}, { timestamps: true });

// Vérification cohérence dates
ContratSchema.pre('save', function(next) {
  if (this.dateFin && this.dateDebut && this.dateFin <= this.dateDebut) {
    return next(new Error("La date de fin doit être après la date de début"));
  }
  next();
});

module.exports = mongoose.model('Contrat', ContratSchema);
