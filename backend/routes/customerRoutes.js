const express = require('express');
const router = express.Router()

const customerController = require("../controller/customerController");

router.post('/customer',customerController.addCustomer);
router.get('/customer',customerController.getAllCustomer)
// router.get('/customer/:id',customerController.getproductById);

module.exports = router;