import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Products.css";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function ViewProduct() {
  const [product, setProduct] = useState({
    name: "",
    category: "",
    brand: "",
    price: "",
    quantity: "",
    type: "",
    description: "",
  });

  let navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    function getProduct() {
      axios
        .get(`http://localhost:5000/api/products/${id}`)
        .then((res) => {
          setProduct(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getProduct();
  }, []);

  function updateData(e) {
    e.preventDefault();

    const updatedProduct = product;

    axios
      .put(`http://localhost:5000/api/products/${id}`, updatedProduct)
      .then(() => {
        alert("Product details updated");
        navigate("/allProducts");
      })
      .catch((err) => {
        alert(err);
      });
  }

  const cartIconStyle = {
    borderRadius: 35,
    borderColor: "white",
    color: "white",
    fontWeight: "bold",
    fontSize: "110%",
    margin: "20px",
  };

  return (
    <div className="container">
      <div className="">
        <div className="">
          <div className="formHeader">Product Details</div>
          <img className="prodImg" src={product.imageUrl} />

          <div className="product_Content">
            <Button
              variant="outlined"
              style={cartIconStyle}
              size="large"
              endIcon={<ShoppingCartIcon />}
            >
              Add to Cart &nbsp;{" "}
            </Button>
            <h5>{product.name}</h5>
            <h5>Rs.{product.price}.00</h5>
            <h5>{product.quantity}</h5>
            <h5>{product.description}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
