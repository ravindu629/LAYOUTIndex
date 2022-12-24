import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Users.css";

export default function RegisterUser() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  let navigate = useNavigate();

  function sendData(e) {
    e.preventDefault();

    if (user.password == confirmPassword) {
      axios
        .post("http://localhost:5000/api/users", user)
        .then(() => {
          alert("User registered");
          navigate("/allProducts");
        })
        .catch((err) => {
          alert(err);
        });
    } else {
      alert("passwords and confirm password does not match!");
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setConfirmPassword(event.target.value);

    setUser((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }

  return (
    <div className="container">
      <div className="formContentUser">
        <div className="formBackgroundUser">
          <div className="formHeaderUser">Registration Form</div>
          <form onSubmit={sendData}>
            <div className="form-group row formElementUser">
              <label for="" className="col-sm-2 col-form-label">
                Full Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control form-controlUser"
                  id=""
                  name="name"
                  placeholder="Enter your full name"
                  onChange={handleChange}
                  value={user.name}
                  required
                />
              </div>
            </div>

            <div className="form-group row formElementUser">
              <label for="" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control form-controlUser"
                  id=""
                  name="email"
                  placeholder="Enter your email address"
                  onChange={handleChange}
                  value={user.email}
                  required
                />
              </div>
            </div>

            <div className="form-group row formElementUser">
              <label for="" className="col-sm-2 col-form-label">
                Password
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control form-controlUser"
                  id=""
                  name="password"
                  placeholder="Enter password"
                  onChange={handleChange}
                  value={user.password}
                  required
                />
              </div>
            </div>

            <div className="form-group row formElementUser">
              <label for="" className="col-sm-2 col-form-label">
                Confirm Password
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control form-controlUser"
                  id=""
                  name="confirmPassword"
                  placeholder="Enter given password again"
                  onChange={handleChange}
                  value={user.confirmPassword}
                  required
                />
              </div>
            </div>

            <br />
            <div className="form-group row">
              <div className="col-sm-10">
                <button
                  type="submit"
                  className="btn btn-dark btn-lg formBtnUser"
                >
                  Register
                </button>
              </div>
              <br />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
