const express = require("express");
const router = express.Router();
const {
  addProduct,
  getProducts,
  getProduct,
  updateProduct,
  removeProduct,
} = require("../controllers/Product.controller");

//REST API for products
//call relevant controller function according to the request type

router.get("/", getProducts);

router.get("/:id", getProduct);

router.post("/", addProduct);

router.put("/:id", updateProduct);

router.delete("/:id", removeProduct);

module.exports = router;
