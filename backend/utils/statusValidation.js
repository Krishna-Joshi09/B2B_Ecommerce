const zod =require ("zod");
const statusValidation = zod.object({
    body:zod.object({
        statusDetails:zod
        .string()
        .max(20, "the max char of status Name should be 20")
        .min(4, "min 4 req"),


    }),
});
module.exports=statusValidation;