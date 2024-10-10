const mongoose = require('mongoose');

const immoSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    Price: { type: Number, required: true },
    Description: { type: String, required: true },
    Image: { type: String, required: true },
}, { collection: 'biens' });

const Immo = mongoose.model('Immo', immoSchema);
module.exports = Immo;