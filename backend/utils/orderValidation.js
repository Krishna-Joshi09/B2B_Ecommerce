const zod =require ("zod");
const orderValidation = zod.object({
    body:zod.object({
        payment_method:zod
        .string()
        .max(20, "the max char of payment method should be 20")
        .min(4, "min 4 req"),
        shipping_method:zod
        .string()
        .max(20,"the max char of shipping method should be 20")
        .min(3,"min 3 req"),
        total_amount:zod.number(),



    }),
});
module.exports= orderValidation;