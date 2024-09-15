// models/Item.js
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    alergenics: [String],
    img: { type: String },
    tags: { type: String },
});

module.exports = mongoose.model('Item', itemSchema);
