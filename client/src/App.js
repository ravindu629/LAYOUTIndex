import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Header from "./components/navigation/Header";
import Footer from "./components/navigation/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path="/home" exact element={<Contacts />} />

          <Route path="/addEvent" exact element={<AddNewEvent />} />
          <Route path="/addUser" exact element={<RegisterUser />} />
          <Route path="/" exact element={<UserLogin />} /> */}
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
