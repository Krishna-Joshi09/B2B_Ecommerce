const zod = require("zod");
const subcategoryValidation = zod.object({
  body: zod.object({
    subCategoryName: zod
      .string()
      .max(10, "the max char of Subcategory Name should be 10")
      .min(5, "min 5 req"),
      

}),
});
module.exports = subcategoryValidation;