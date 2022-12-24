const mongoose = require("mongoose");
const { Schema } = mongoose;

//Created Schema for Events
const productSchema = new Schema({
  name: String,
  category: String,
  brand: String,
  price: String,
  quantity: String,
  type: String,
  description: String,
  imageUrl: String,
});

module.exports = Product = mongoose.model("Product", productSchema);
