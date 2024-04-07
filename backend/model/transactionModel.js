const mongoose = require("mongoose"); 
const Schema = mongoose.Schema
const TransactionSchema = new Schema(
    {
        payment_status:{
            type: String,
            required: true, 
            trim : true
        },
        transaction_date:{
            type: Date,
            default: Date.now,
            // default: Date.now
        },
        payment_amount:{
            type: Number,
            required: true,
            trim : true
        },
       
        createdAt:{
            type: Date,
            default: Date.now
        },
        updatedAt:{
            type: Date,
            default: Date.now
        }
    },
    {
        timeStamps : true
    }
)


module.exports = mongoose.model('Transaction',TransactionSchema)
