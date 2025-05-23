const Order = require('../models/orders');
const User = require('../models/users');

// Create a new order
const createOrder = async (req, res) => {
  try {
    const { products, shippingAddress, paymentDetails, totalAmount } = req.body;

    const user = await User.findById(req.user.id).select('name email');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const newOrder = await Order.create({
      user: {
        name: user.name,
        email: user.email
      },
      products,
      shippingAddress,
      paymentDetails,
      totalAmount,
      orderStatus: 'Processing'
    });

    res.status(201).json({
      message: 'Order placed successfully',
      order: newOrder
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all orders by user ID
const getOrdersByUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('email');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const orders = await Order.find({ 'user.email': user.email }).sort({ orderedAt: -1 });

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Update order status

const updateOrderStatus = async (req, res) => {
    try {
      const orderId = req.params.id;
      const { status } = req.body;
  
      const order = await Order.findById(orderId);
      if (!order) {
        return res.status(404).json({ message: 'Order not found' });
      }
  
      order.orderStatus = status;
      await order.save();
  
      res.status(200).json({ message: 'Order status updated', order });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

module.exports = {
  createOrder,
  getOrdersByUser,updateOrderStatus
};
