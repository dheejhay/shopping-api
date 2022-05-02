const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    title: {
        type: String
    },
    price: {
        type: Number
    },
    description: {
        type: String
    },
    categorty: {
        type: String
    },
    qty: {
        type: Number
    }
})
module.exports = mongoose.model('Product', productSchema)