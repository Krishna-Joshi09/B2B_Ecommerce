const zod =require ("zod");
const customerValidation = zod.object({
    body:zod.object({
        customer_name:zod
        .string()
        .max(20, "the max char of category Name should be 20")
        .min(3, "min 3 req"),

        customer_contact_no:zod
        .number(),

        customer_email:zod.string().email(),

        customer_address:zod
        .string()
        .max(20,"the max char of address should be 20")
        .min(5,"the min char of address should be 5"),




    }),
});
module.exports=customerValidation;