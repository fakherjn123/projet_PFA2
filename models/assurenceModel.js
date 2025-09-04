const mongoose = require('mongoose');
const Contrat = require("../models/contratModel");

const AssuranceSchema = new mongoose.Schema({
    contrat: { type: mongoose.Schema.Types.ObjectId, ref: 'Contrat', required: true }, // Attention au nom du modèle
    numeroPolice: { type: String,  unique: true, trim: true },
    compagnie: { type: String, required: true, trim: true },
    type: { type: String, enum: ['vol', 'accident', 'tous risques'], required: true },
    dateDebut: { type: Date, required: true },
    dateFin: { type: Date, required: true },
    
}, { timestamps: true });

// Vérification cohérence dates
AssuranceSchema.pre('save', function(next) {
  if (this.dateFin <= this.dateDebut) {
    return next(new Error("La date de fin doit être supérieure à la date de début"));
  }
  next();
});

module.exports = mongoose.model('Assurance', AssuranceSchema);
