import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Products.css";
import Button from "@mui/material/Button";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { useNavigate } from "react-router-dom";

function AllProducts() {
  const [products, setProducts] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    function getProducts() {
      axios
        .get("http://localhost:5000/api/products")
        .then((res) => {
          setProducts(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getProducts();
  }, []);

  function deleteProduct(_id) {
    axios
      .delete("http://localhost:5000/api/products/" + _id)
      .then((res) => {
        alert("Product deleted");
      })
      .catch((err) => {
        alert(err);
      });

    setProducts(products.filter((product) => product._id !== _id));
  }

  const btnStyle = {
    borderRadius: 35,
    backgroundColor: "white",
    margin: "0 18px 18px",
    color: "black",
    fontWeight: "bold",
  };

  const btnStyleBack = {
    borderRadius: 35,
    margin: "0 18px 18px",
    color: "White",
    fontWeight: "bold",
  };

  return (
    <div className="admin_table_style">
      <div className="tableButtons">
        <Button
          variant="outlined"
          style={btnStyleBack}
          size="large"
          startIcon={<ArrowBackIcon />}
          onClick={() => {
            navigate("/");
          }}
        ></Button>
        <Button
          variant="contained"
          style={btnStyle}
          startIcon={<AddIcon />}
          onClick={() => {
            navigate("/addProduct");
          }}
        >
          Add New Product
        </Button>
        <Button
          variant="contained"
          style={btnStyle}
          startIcon={<AddIcon />}
          onClick={() => {
            navigate("/addUser");
          }}
        >
          Add New Product Manager
        </Button>
      </div>
      <div className="table_heading">All Products Details</div>

      <div className="tableContent">
        <table className="table table-bordered table-hover ">
          <thead className="table-dark">
            <tr>
              <th scope="col">No</th>
              <th scope="col">Product Name</th>
              <th scope="col">Category</th>
              <th scope="col">Brand Name</th>
              <th scope="col">Price (Rs)</th>
              <th scope="col">Quantity</th>
              <th scope="col">Type</th>

              <th></th>
            </tr>
          </thead>
          <tbody className="table-light">
            {products.map((product, index) => {
              return (
                <tr key={product._id}>
                  <td>{index + 1}</td>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.brand}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td>{product.type}</td>
                  <td>
                    <Button
                      variant="contained"
                      style={{
                        borderRadius: 35,
                        backgroundColor: "",
                        marginRight: "18px",
                        color: "white",
                        fontWeight: "bold",
                      }}
                      startIcon={<EditIcon />}
                      onClick={() => {
                        navigate(`/updateProduct/${product._id}`);
                      }}
                    >
                      Update
                    </Button>
                    <Button
                      variant="contained"
                      style={{
                        borderRadius: 35,
                        backgroundColor: "brown",
                        marginRight: "18px",
                        color: "white",
                        fontWeight: "550600",
                      }}
                      startIcon={<DeleteForeverIcon />}
                      onClick={() => {
                        if (
                          window.confirm(
                            "Are you sure you wish to delete this record?"
                          )
                        )
                          deleteProduct(product._id);
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllProducts;
