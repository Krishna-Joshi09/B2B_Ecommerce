const express = require('express');
const router = express.Router();
const statusController = require('../controller/statusController'); 

const validate = require("../middleware/zodMiddleWare");
const statusValidation = require("../utils/statusValidation");

router.post('/status',validate(statusValidation),statusController.createStatus);


router.post('/status', statusController.createStatus);
router.get('/status', statusController.getAllStatus);
router.get("/status/:id", statusController.getStatusById);
router.post("/status/:id", statusController.updateStatusById);
router.delete("/status/:id", statusController.deleteStatusById);


module.exports = router;