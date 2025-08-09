const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    originalUrl: String,
    shortCode: String,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Url', urlSchema);
