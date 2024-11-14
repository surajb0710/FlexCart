const mongoose = require('mongoose');

// Define the Address Schema
const AddressSchema = new mongoose.Schema({
  streetName: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  pincode: { type: String, required: true },
});

// Define the User Schema
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phoneNumber: { type: Number },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: AddressSchema, // Embedding Address Schema in User
  wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  orderHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
