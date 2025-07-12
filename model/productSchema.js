const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    productName:{
        required: true,
        type: String
    },
    unitPrice:{
        required: true,
        type: Number
    },
    description:{
        required: true,
        type: String
    },
    image:{
        required: true,
        type: Object
    },
    status:{
        required: true,
        type: Boolean
    },
    qtyOnHand:{
        required: true,
        type: Number
    }
});

module.exports = mongoose.model("product", productSchema);