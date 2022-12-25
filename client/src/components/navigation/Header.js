import React from "react";
import "./Nav.css";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Header() {
  const cartIconStyle = {
    borderRadius: 35,
    borderColor: "white",
    color: "white",
    fontWeight: "bold",
    fontSize: "110%",
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <a className="navbar-brand" href="/">
        LAYOUTIndex
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item clothes">
            <a className="nav-link" href="/">
              CLOTHES
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/footwears">
              FOOTWEAR
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/accessories">
              ACCESSORIES
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/login">
              MANAGE PRODUCTS
            </a>
          </li>

          <li className="nav-item">
            <Button
              variant="outlined"
              style={cartIconStyle}
              size="large"
              endIcon={<ShoppingCartIcon />}
            >
              0 &nbsp;{" "}
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
