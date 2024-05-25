const zod = require("zod");
const productValidation = zod.object({
  body: zod.object({
    productName: zod
      .string()
      .max(10, "the max char of produc Name should be 10")
      .min(5, "min 5 req"),
      productDetails: zod
      .string()
      .max(150, "the max char of produc Name should be 150")
      .min(10, "min 10 req"),
      productPrice: zod.number(),
      productQuantity:zod.number(),

}),
});
module.exports = productValidation;