const express = require('express');
const router = express.Router();
const transactionController = require('../controller/transactionController'); 


const validate = require("../middleware/zodMiddleWare")
const transactionValidation = require('../utils/transactionValidation');

router.post('/transaction',validate(transactionValidation),transactionController.createTransaction);

router.post('/transaction',transactionController.createTransaction);
router.get('/transaction',transactionController.getAllTransaction);
router.get("/transaction/:id", transactionController.getTransactionById);
router.post("/transaction/:id", transactionController.updateTransactionById);
router.delete("/transaction/:id", transactionController.deleteTransactionById);

module.exports = router;