const express = require('express');
const {
  createOrder,
  getUserOrders,
  getOrderById,
  updateOrderStatus,
} = require('../controllers/orderController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Route to create a new order (only accessible by authenticated users)
router.post('/', authMiddleware, createOrder);

// Route to get all orders for a specific user (only accessible by authenticated users)
router.get('/user', authMiddleware, getUserOrders);

// Route to get a single order by ID (only accessible by authenticated users)
router.get('/:id', authMiddleware, getOrderById);

// Route to update an order status (only accessible by authorized users, e.g., admin)
router.put('/:id/status', authMiddleware, updateOrderStatus);

module.exports = router;
