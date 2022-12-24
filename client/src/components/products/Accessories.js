import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { useNavigate } from "react-router-dom";
import "./Home.css";

function Accessories() {
  const [accessories, setAccessories] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    function getAccessories() {
      axios
        .get("http://localhost:5000/api/products")
        .then((res) => {
          const allProducts = res.data;

          const accessories_ = allProducts.filter((product) => {
            return product.category === "Accessories";
          });

          setAccessories(accessories_);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getAccessories();
  }, []);

  //search function

  function filterData(products, searchKey) {
    const result = products.filter((product) => {
      return (
        product.type.toLowerCase().includes(searchKey) &&
        product.category == "Accessories"
      );
    });

    setAccessories(result);
  }

  function handleSearchArea(e) {
    const searchKey = e.target.value;

    axios.get("http://localhost:5000/api/products").then((res) => {
      filterData(res.data, searchKey);
    });
  }

  const viewBtnStyle = {
    borderRadius: 35,
    padding: "5px 15px",
    color: "orange",
    fontWeight: "bold",
    margin: "20px",
    borderColor: "orange",
  };

  return (
    <div className="container">
      <div className="">
        <div className="searchSection">
          <input
            type="text"
            className="form-control rounded searchBar"
            placeholder="Filter by gender (male/ female/ kids)"
            aria-label="Search"
            aria-describedby="search-addon"
            onChange={handleSearchArea}
          />
        </div>
        <h4 className="productTitle">Accessories</h4>
        <div>
          {accessories.map((acc, index) => {
            return (
              <div className="note" key={acc._id}>
                <div>
                  <img className="eventImg" src={acc.imageUrl} />
                  <div className="productDesc">
                    <h1>{acc.name}</h1>
                    <h1>{acc.brand}</h1>
                    <h1>Rs.{acc.price}.00</h1>
                    <h1>{acc.quantity}</h1>
                    <h1>{acc.type}</h1>
                    <br />
                  </div>
                  <div className="productBoxBtn">
                    <Button
                      variant="outlined"
                      style={viewBtnStyle}
                      startIcon={<VisibilityIcon />}
                      onClick={() => {
                        navigate(`/viewProduct/${acc._id}`);
                      }}
                    >
                      View Product
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Accessories;
