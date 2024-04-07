const express = require('express');
const router = express.Router()

const transactionController = require("../controller/transactionController");

router.post('/transaction',transactionController.addtransaction);
router.get('/transaction',transactionController.getAlltransaction);

module.exports = router;