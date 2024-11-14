const mongoose = require('mongoose');

// Subdocument for Customer Reviews
const ReviewSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  reviewText: { type: String },
  reviewDate: { type: Date, default: Date.now },
  reviewVerified: { type: Boolean, default: false },
  likeCount: { type: Number, default: 0 },
  dislikeCount: { type: Number, default: 0 },
  images: [String], // Array of review images
});

// Subdocument for the description (including subcategory details, material & care)
const DescriptionSchema = new mongoose.Schema({
  details: { type: String },
  material: { type: String },
});

const CategorySchema = new mongoose.Schema({
  productCategory: { type: String, required: true },
  userCategory: {
    type: String,
    required: true,
    enum: ['MEN', 'WOMEN', 'BOYS', 'GIRLS', 'BABY'],
  },
});

// Main Product Schema
const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: [CategorySchema], // Array for multiple categories
  price: { type: Number, required: true },
  stock: { type: Number, default: 100 },
  style: {
    type: String,
    required: true,
    enum: ['CASUAL', 'FORMAL', 'SPORTS'],
  },
  images: [String],

  // New fields added as per your request
  brand: { type: String },
  color: { type: String, enum: ['RED', 'WHITE', 'BLUE', 'GREEN', 'PINK'] },
  campaign: [{ type: String }], // Array to support multiple campaigns
  description: DescriptionSchema, // Embedded subdocument for detailed description
  avgRating: { type: Number, default: 0 }, // Average product rating
  totalNumberOfRatings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // Array of User IDs for ratings
  customerReviews: [ReviewSchema], // Array of reviews as subdocuments
  productCode: { type: String, unique: true }, // Product code (unique)
  supplierName: { type: String },
  size: [{ type: String, enum: ['XS', 'S', 'M', 'L', 'XL', 'XXL'] }], // Enum for size options
  pincodes: [{ type: String }], // Array of pincodes where product can't be delivered
  cashOnDeliveryAvailable: { type: Boolean, default: false }, // Boolean for COD availability
  returnApplicable: { type: Boolean, default: false }, // Boolean for return applicability
  returnDuration: { type: Number, min: 1 }, // Only applicable if returnApplicable is true
  exchangeApplicable: { type: Boolean, default: false }, // Boolean for exchange applicability
  exchangeDuration: { type: Number, min: 1 }, // Only applicable if exchangeApplicable is true
});

// Create the model from the schema
module.exports = mongoose.model('Product', ProductSchema);
