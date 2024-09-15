// models/Menu.js
const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    title: { type: String, required: true },
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
    active: { type: Boolean, required: true, default: false }
});

module.exports = mongoose.model('Menu', menuSchema);
