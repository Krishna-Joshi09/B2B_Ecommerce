const express = require('express');
const router = express.Router()
const productController = require("../controller/productController");

router.post('/product',productController.createProduct);
router.get('/product',productController.getAllProducts);
router.get('/product/:id',productController.getproductById);

module.exports = router;