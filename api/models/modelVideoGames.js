const mongoose = require('../mongo_connection');
const Videogame = mongoose.model('Videogame', {
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    classification: {
        type: Number,
        required: true,
        min: 0,
    },
});

module.exports = Videogame;