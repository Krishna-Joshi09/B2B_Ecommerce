const express = require('express');
const router = express.Router();
const adminController = require('../controller/adminController'); 

const validate = require("../middleware/zodMiddleWare");
const productValidation = require("../utils/adminValidation");
const adminValidation = require('../utils/adminValidation');

router.post("/admin",validate(adminValidation),adminController.createAdmin);

router.post('/admin', adminController.createAdmin);
router.get('/admin', adminController.getAllAdmin);
router.get("/admin/:id", adminController.getAdminById);
router.post("/admin/:id", adminController.updateAdminById);
router.delete("/admin/:id", adminController.deleteAdminById);


module.exports = router;