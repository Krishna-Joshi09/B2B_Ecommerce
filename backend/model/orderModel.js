const mongoose = require("mongoose"); 
const Schema = mongoose.Schema

const OrderSchema = new Schema(
    {

    payment_method:{
        type: String,
        // required: true,
        trim : true,
    },
    shipping_method:{
        type: String,
        // required: true,
        trim : true,
    },
    total_amount:{
        type: String,
        // required: true,
        trim : true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
    updatedAt:{
        type: Date,
        default: Date.now,
    }
},

{
    timeStamps : true
}

)    

module.exports = mongoose.model('Order',OrderSchema)