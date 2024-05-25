const express = require('express');
const router = express.Router()
const productController = require("../controller/productController");

const validate = require("../middleware/zodMiddleWare");
const productValidation = require("../utils/productValidation");

router.post("/product",validate(productValidation),productController.createProduct);

router.post('/product',productController.createProduct);
router.get('/product',productController.getAllProducts);
router.get("/product/:id", productController.getproductById);
router.post("/product/:id", productController.updateProductById);
router.delete("/product/:id",productController.deleteProductById);

module.exports = router
