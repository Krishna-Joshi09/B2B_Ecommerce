const zod =require ("zod");
const categoryValidation = zod.object({
    body:zod.object({
        categoryName:zod
        .string()
        .max(20, "the max char of category Name should be 20")
        .min(5, "min 5 req"),


    }),
});
module.exports=categoryValidation;