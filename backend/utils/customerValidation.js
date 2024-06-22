const zod =require ("zod");
const multer  = require('multer')
const upload = multer()

const customerValidation = zod.object({
    body:zod.object({
        customer_name:zod
        .string()
        .max(20, "the max char of customer Name should be 20")
        .min(3, "min 3 req"),
        

        customer_contact_no: zod.string().refine((val) => {
            const indianPhoneNumberRegex = /^\+91\d{10}$/;
            return indianPhoneNumberRegex.test(val);
        },


        {
            message: "Invalid Indian phone num",
        })
        ,

        customer_email:zod.string().email(),

        customer_address:zod
        .string()
        .max(20,"the max char of customer address should be 20")
        .min(5,"the min char of customer address should be 5"),


        

    }),
});
module.exports=customerValidation;



