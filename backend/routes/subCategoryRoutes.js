const express = require('express');
const router = express.Router();
const subCategoryController = require('../controller/subCategoryController'); 

const validate = require("../middleware/zodMiddleWare");
const categoryValidation = require("../utils/subcategoryValidation");
const subcategoryValidation = require('../utils/subcategoryValidation');

router.post('/subcategory',validate(subcategoryValidation),subCategoryController.createSubCategory);


router.post('/subcategory', subCategoryController.createSubCategory);
router.get('/subcategory', subCategoryController.getAllSubCategory);
router.get("/subcategory/:id", subCategoryController.getSubCategoryById);
router.post("/subcategory/:id", subCategoryController.updateSubCategoryById);
router.delete("/subcategory/:id", subCategoryController.deleteSubCategoryById);


module.exports = router;