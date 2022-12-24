import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { useNavigate } from "react-router-dom";
import "./Home.css";

function Clothes() {
  const [clothes, setClothes] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    function getClothes() {
      axios
        .get("http://localhost:5000/api/products")
        .then((res) => {
          const allProducts = res.data;

          const clothes_ = allProducts.filter((product) => {
            return product.category === "Clothes";
          });

          setClothes(clothes_);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getClothes();
  }, []);

  //search function

  function filterData(products, searchKey) {
    const result = products.filter((product) => {
      return (
        product.type.toLowerCase().includes(searchKey) &&
        product.category == "Clothes"
      );
    });

    setClothes(result);
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
        <h4 className="productTitle">Clothes</h4>
        <div>
          {clothes.map((cloth, index) => {
            return (
              <div className="note" key={cloth._id}>
                <div>
                  <img className="eventImg" src={cloth.imageUrl} />
                  <div className="productDesc">
                    <h1>{cloth.name}</h1>
                    <h1>{cloth.brand}</h1>
                    <h1>Rs.{cloth.price}.00</h1>
                    <h1>{cloth.quantity}</h1>
                    <h1>{cloth.type}</h1>
                    <br />
                  </div>
                  <div className="productBoxBtn">
                    <Button
                      variant="outlined"
                      style={viewBtnStyle}
                      startIcon={<VisibilityIcon />}
                      onClick={() => {
                        navigate(`/viewProduct/${cloth._id}`);
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

export default Clothes;
