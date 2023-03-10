import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { useNavigate } from "react-router-dom";
import "./Home.css";

function Footwear() {
  const [footwear, setFootwear] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    function getFootwear() {
      axios
        .get("http://localhost:5000/api/products")
        .then((res) => {
          const allProducts = res.data;

          const foot = allProducts.filter((product) => {
            return product.category === "Footwear";
          });

          setFootwear(foot);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getFootwear();
  }, []);

  //search function

  function filterData(products, searchKey) {
    const result = footwear.filter((product) => {
      return (
        product.type.toLowerCase().includes(searchKey) &&
        product.category == "Footwear"
      );
    });

    setFootwear(result);
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
        <h4 className="productTitle">Footwear</h4>
        <div>
          {footwear.map((foot, index) => {
            return (
              <div className="note" key={foot._id}>
                <div>
                  <img className="eventImg" src={foot.imageUrl} />
                  <div className="productDesc">
                    <h1>{foot.name}</h1>
                    <h1>{foot.brand}</h1>
                    <h1>Rs.{foot.price}.00</h1>
                    <h1>{foot.quantity}</h1>
                    <h1>{foot.type}</h1>
                    <br />
                  </div>
                  <div className="productBoxBtn">
                    <Button
                      variant="outlined"
                      style={viewBtnStyle}
                      startIcon={<VisibilityIcon />}
                      onClick={() => {
                        navigate(`/viewProduct/${foot._id}`);
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

export default Footwear;
