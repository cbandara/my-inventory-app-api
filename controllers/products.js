const Product = require('../models/products');

module.exports = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find({});
      return res.json({
        products
      })
    } catch (error) {
      return res.status(500).send({
        error: error.message
      })
    }
  },
  addProduct: async (req, res) => {
    try {
      const { name, image } = req.body;
      const newProduct = new Product({ name, image });
      await newProduct.save();
      return res.status(201).json({
        newProduct
      })

    } catch (error) {
      return res.status(500).send({
        error: error.message
      })
    }
  },
  deleteProduct: async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findById(id);
      if (product) {
        await product.remove();
      }
      return res.json({
        success: true
      })

    } catch (error) {
      return res.status(500).send({
        error: error.message
      })
    }
  },
  updateProduct: async (req, res) => {
    try {
      const { id } = req.params;

      const product = await Product.findByIdAndUpdate(id, req.body, { new: true })

      return res.json({
        product
      })

    } catch (error) {
      return res.status(500).send({
        error: error.message
      })
    }
  }
}