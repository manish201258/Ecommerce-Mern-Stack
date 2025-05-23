const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: {
    name: { type: String, required: true },
    email: { type: String, required: true }
  },
  products: [
    {
      name: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, required: true },
      image: String,
    }
  ],
  shippingAddress: {
    fullName: { type: String, required: true },
    addressLine1: { type: String, required: true },
    addressLine2: String,
    city: { type: String, required: true },
    state: String,
    postalCode: { type: String, required: true },
    country: { type: String, required: true }
  },
  paymentDetails: {
    method: { type: String, default: 'Cash on Delivery' },
    status: { type: String, default: 'Pending' },
    transactionId: String
  },
  totalAmount: { type: Number, required: true },
  orderStatus: { type: String, default: 'Processing' },
  orderedAt: { type: Date, default: Date.now }
}, {
  timestamps: true
});

module.exports = mongoose.model('Order', orderSchema);
