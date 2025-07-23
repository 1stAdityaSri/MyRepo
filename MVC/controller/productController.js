const Product = require('../models/productModel');

const createProduct = async (req, res) => {
  const { name, price, des, category } = req.body;

  try {
    const newProduct = new Product({
      name,
      price,
      des,
      category
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ success: false, message: "internal server error" });
  }
};

putProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, des, category } = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, price, des, category },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    res.status(500).json({ success: false, message: "internal server error" });
  }
};

const getProducts = async (req, res) => {
  try {
    const allProducts = await Product.find();
    if(!allProducts || allProducts.length === 0) {
        return res.json({ success: false, message: "no products found" });
    }
    res.status(200).json({ success: true, data: allProducts });
  } catch (error) {
    res.status(500).json({ success: false, message: "internal server error" });
  }
};

deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }
    res.status(200).json({ success: true, data: deletedProduct });
  } catch (error) {
    res.status(500).json({ success: false, message: "internal server error" });
  }
};

module.exports = {
  createProduct,
  getProducts,
  putProduct,
  deleteProduct
};
