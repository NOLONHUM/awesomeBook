const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    genres: [ { type: String, required: true } ]
});

module.exports = mongoose.model('Book', bookSchema);