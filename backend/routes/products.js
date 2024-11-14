const express = require('express');
const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Route to create a new product (only accessible by authorized users, e.g., admin)
router.post('/', authMiddleware, createProduct);

// Route to get all products
router.get('/', getProducts);

// Route to get a single product by ID
router.get('/:id', getProductById);

// Route to update a product by ID (only accessible by authorized users, e.g., admin)
router.put('/:id', authMiddleware, updateProduct);

// Route to delete a product by ID (only accessible by authorized users, e.g., admin)
router.delete('/:id', authMiddleware, deleteProduct);

module.exports = router;
