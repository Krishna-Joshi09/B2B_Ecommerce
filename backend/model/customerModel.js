const mongoose = require("mongoose"); 
const { string } = require("zod");
const Schema = mongoose.Schema

const CustomerSchema = new Schema(
    {
    customer_name:{
        type: String,
        // required: true, 
        trim : true,
    },
    // user_file:{
    //     type: String,
    //     // required: true, 
    //     trim : true,
    // },
    customer_contact_no:{
        type: Number,
        // required: true,
        trim : true,
    },
    customer_email:{
        type: String,
        // required: true,
        trim : true,
    },
    customer_address:{
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

module.exports = mongoose.model('Customer',CustomerSchema)