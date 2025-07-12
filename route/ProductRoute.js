const express = require('express');
const ProductController = require('../controller/productController');
const AuthMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post('/create', AuthMiddleware, ProductController.create);
router.get('/all', ProductController.findAll);
router.get('/find-by-id/:id', ProductController.findByID)
router.put('/update/:id', AuthMiddleware, ProductController.updateProduct)
router.delete('/delete/:id', AuthMiddleware, ProductController.deleteProduct);

module.exports = router;