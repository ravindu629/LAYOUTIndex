const Product = require("../models/Product.model");

//Controlling functions for products

//Add a new product
const addProduct = (req, res) => {
  const { name, category, brand, price, quantity, description, type } =
    req.body;

  const product = new Product({
    name,
    category,
    brand,
    price,
    quantity,
    description,
    type,
  });

  product
    .save()
    .then((createdProduct) => {
      res.json(createdProduct);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

//Get all products details
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(400).json(error);
  }
};

//get a specific product details
const getProduct = async (req, res) => {
  const productId = req.params.id;

  try {
    const product = await Product.findById(productId);
    res.json(product);
  } catch (error) {
    res.status(400).json(error);
  }
};

//update relevant product details
const updateProduct = async (req, res) => {
  const productId = req.params.id;

  try {
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json("There is no product to update");
    }

    const { name, category, brand, price, quantity, description, type } =
      req.body;

    const updatedProduct = await Product.findByIdAndUpdate(productId, {
      name,
      category,
      brand,
      price,
      quantity,
      description,
      type,
    });

    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

//remove unnesessary products
const removeProduct = async (req, res) => {
  const productId = req.params.id;

  try {
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json("There is no product to remove");
    }

    const removedProduct = await Product.findByIdAndDelete(productId);
    res.status(200).json(removedProduct);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  addProduct,
  getProducts,
  getProduct,
  updateProduct,
  removeProduct,
};
