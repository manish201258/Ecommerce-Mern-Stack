const router = require('express').Router();
const { createOrder, getOrdersByUser, updateOrderStatus } = require('../controllers/orderController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/orders', authMiddleware, createOrder);
router.get('/orders', authMiddleware, getOrdersByUser);

// Update order status (admin)
router.put('/orders/:id/status', authMiddleware, updateOrderStatus);

module.exports = router;
