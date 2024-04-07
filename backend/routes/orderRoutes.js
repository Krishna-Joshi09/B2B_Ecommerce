const express = require('express');
const router = express.Router()
const orderController = require("../controller/orderController");

router.post('/order',orderController.addOrder);
router.get('/order',orderController.getAllOrder);

module.exports = router;