const express = require('express');
const router = express.Router();
const categoryController = require('../controller/categoryController');

const validate = require("../middleware/zodMiddleWare");
const categoryValidation = require("../utils/categoryValidation");

router.post('/category',validate(categoryValidation),categoryController.createCategory);

router.post('/category', categoryController.createCategory);
router.get('/category', categoryController.getAllCategory);
router.get("/category/:id", categoryController.getCategoryById);
router.post("/category/:id", categoryController.updateCategoryById);
router.delete("/category/:id", categoryController.deleteCategoryById);


module.exports = router;