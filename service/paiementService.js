
module.exports = {
    async getAllPaiements() {
        // 
        return [
            { id: 1, montant: 200, methode: "Carte bancaire" },
            { id: 2, montant: 150, methode: "Espèces" }
        ];
    },

    async createPaiement(data) {
        return { id: Date.now(), ...data };
    }
};
module.exports.getAll = async () => {
    // Ici tu peux appeler la base MongoDB plus tard
    return [
        { id: 1, montant: 120, mode: "Carte bancaire", statut: "Validé" },
        { id: 2, montant: 85, mode: "Espèces", statut: "En attente" }
    ]
}