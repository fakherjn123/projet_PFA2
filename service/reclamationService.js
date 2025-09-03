
let reclamations = [
    { id: 1, client: "Ahmed", sujet: "Retard de livraison", statut: "En cours" },
    { id: 2, client: "Sami", sujet: "Erreur de facture", statut: "Résolu" }
]

module.exports.getAll = async () => {
    return reclamations
}

module.exports.create = async (data) => {
    const newReclamation = {
        id: reclamations.length + 1,
        ...data
    }
    reclamations.push(newReclamation)
    return newReclamation
}