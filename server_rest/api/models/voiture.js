const mongoose = require('mongoose');

const voitureSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    imagePath:String,
    nom: String,
    description:String,
    prix: Number
});

module.exports = mongoose.model('Voiture', voitureSchema);