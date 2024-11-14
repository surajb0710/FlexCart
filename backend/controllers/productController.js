const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getProductById = (req, res) => {
  // Logic to get a product by ID
  res.send('Single product by ID');
};

exports.updateProduct = (req, res) => {
  // Logic to update a product
  res.send('Product updated');
};

exports.deleteProduct = (req, res) => {
  // Logic to delete a product
  res.send('Product deleted');
};
// Add update and delete logic here similarly
