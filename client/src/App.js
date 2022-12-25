import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Header from "./components/navigation/Header";
import Footer from "./components/navigation/Footer";
import AddProduct from "./components/products/AddProduct";
import UpdateProduct from "./components/products/UpdateProduct";
import AllProducts from "./components/products/AllProducts";
import UserLogin from "./components/users/UserLogin";
import RegisterUser from "./components/users/RegisterUser";
import Clothes from "./components/products/Clothes";
import Accessories from "./components/products/Accessories";
import Footwear from "./components/products/Footwear";
import ViewProduct from "./components/products/ViewProduct";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path="/home" exact element={<Contacts />} />

          
          <Route path="/addUser" exact element={<RegisterUser />} />
          <Route path="/" exact element={<UserLogin />} /> */}

          <Route path="/addProduct" exact element={<AddProduct />} />
          <Route path="/allProducts" exact element={<AllProducts />} />
          <Route path="/updateProduct/:id" element={<UpdateProduct />} />

          <Route path="/login" exact element={<UserLogin />} />
          <Route path="/addUser" exact element={<RegisterUser />} />

          <Route path="/" exact element={<Clothes />} />
          <Route path="/accessories" exact element={<Accessories />} />
          <Route path="/footwears" exact element={<Footwear />} />
          <Route path="/viewProduct/:id" exact element={<ViewProduct />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
