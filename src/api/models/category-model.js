// models/Category.js
const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    title: { type: String, required: true },
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }]
});

module.exports = mongoose.model('Category', categorySchema);
