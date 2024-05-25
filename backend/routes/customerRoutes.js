const express = require('express');
const router = express.Router()
const customerController = require("../controller/customerController");

const validate = require("../middleware/zodMiddleWare");
const customerValidation = require("../utils/customerValidation");

router.post('/customer',validate(customerValidation),customerController.addCustomer);



router.post('/customer',customerController.addCustomer)
router.get('/customer',customerController.getAllCustomer)
router.get("/customer/:id", customerController.getCustomerById);
router.post("/customer/:id", customerController.updateCustomerById);
router.delete("/customer/:id", customerController.deleteCustomerById);



module.exports = router