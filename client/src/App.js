import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import "./App.css";
import Contacts from "./components/nav/Contacts";
import AddNewEvent from "./components/events/AddNewEvent";
import RegisterUser from "./components/users/RegisterUser";
import UserLogin from "./components/users/UserLogin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" exact element={<Contacts />} />

          <Route path="/addEvent" exact element={<AddNewEvent />} />
          <Route path="/addUser" exact element={<RegisterUser />} />
          <Route path="/" exact element={<UserLogin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
