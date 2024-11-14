const mongoose = require('mongoose');

// Subdocument for Order Status (contains Order Date, Dispatch Status, Dispatch Date, Delivery Status, Delivery Date)
const OrderStatusSchema = new mongoose.Schema({
  orderDate: { type: Date, default: Date.now },
  dispatchStatus: {
    type: String,
    enum: ['Pending', 'Dispatched', 'Shipped'],
    default: 'Pending',
  },
  dispatchDate: { type: Date },
  deliveryStatus: {
    type: String,
    enum: ['Pending', 'Out for Delivery', 'Delivered'],
    default: 'Pending',
  },
  deliveryDate: { type: Date },
});

// Subdocument for Rating (Rating, Courier Rating, Product Rating)
const RatingSchema = new mongoose.Schema({
  rating: { type: Number, min: 1, max: 5 }, // Overall order rating
  courierRating: { type: Number, min: 1, max: 5 }, // Rating for the courier service
  productRating: { type: Number, min: 1, max: 5 }, // Rating for the product
});

const OrderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      quantity: { type: Number, required: true },
    },
  ],
  totalAmount: { type: Number, required: true },
  status: [OrderStatusSchema], // Array of order status, with multiple stages
  paymentId: { type: String },
  trackingNumber: { type: String },
  trackingLink: { type: String },
  courierName: { type: String },
  ratings: RatingSchema, // Embedded ratings subdocument
});

module.exports = mongoose.model('Order', OrderSchema);
