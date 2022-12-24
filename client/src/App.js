import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Header from "./components/navigation/Header";
import Footer from "./components/navigation/Footer";
import AddProduct from "./components/products/AddProduct";
import UpdateProduct from "./components/products/UpdateProduct";

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
          <Route path="/updateProduct/:id" element={<UpdateProduct />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
