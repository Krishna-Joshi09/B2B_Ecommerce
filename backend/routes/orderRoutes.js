const express = require('express');
const router = express.Router();
const orderController = require('../controller/orderController'); 

const validate = require("../middleware/zodMiddleWare");
const orderValidation = require("../utils/orderValidation");

router.post('/order',validate(orderValidation),orderController.createOrder);



router.post('/order',orderController.createOrder);
router.get('/order',orderController.getAllOrders);
router.get("/order/:id", orderController.getOrderById);
router.post("/order/:id",orderController.updateOrderById);
router.delete("/order/:id", orderController.deleteOrderById);


module.exports = router;