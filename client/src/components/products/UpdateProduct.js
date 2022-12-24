import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Products.css";

export default function UpdateProduct() {
  const [product, setProduct] = useState({
    name: "",
    category: "",
    brand: "",
    price: "",
    quantity: "",
    type: "",
    description: "",
  });

  let navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    function getProduct() {
      axios
        .get(`http://localhost:5000/api/products/${id}`)
        .then((res) => {
          setProduct(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getProduct();
  }, []);

  function updateData(e) {
    e.preventDefault();

    const updatedProduct = product;

    axios
      .put(`http://localhost:5000/api/products/${id}`, updatedProduct)
      .then(() => {
        alert("Product details updated");
        navigate("/");
      })
      .catch((err) => {
        alert(err);
      });
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setProduct((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }

  return (
    <div className="container">
      <div className="formContent">
        <div className="formBackground">
          <div className="formHeader">Update Product Details</div>
          <form onSubmit={updateData}>
            <div className="form-group row formElement">
              <label for="" className="col-sm-2 col-form-label">
                Product Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id=""
                  name="name"
                  onChange={handleChange}
                  value={product.name}
                  required
                />
              </div>
            </div>

            <div class="form-group row formElement">
              <label for="" className="col-sm-2 col-form-label">
                Category
              </label>
              <div className="col-sm-10">
                <select
                  id=""
                  class="form-control"
                  value={product.category}
                  onChange={handleChange}
                  name="category"
                >
                  <option
                    selected={product.category === "Clothes"}
                    value="Clothes"
                  >
                    Clothes
                  </option>
                  <option
                    selected={product.category === "Footwear"}
                    value="Footwear"
                  >
                    Footwear
                  </option>
                  <option
                    selected={product.category === "Accessories"}
                    value="Accessories"
                  >
                    Accessories
                  </option>
                </select>
              </div>
            </div>

            <div className="form-group row formElement">
              <label for="" className="col-sm-2 col-form-label">
                Brand Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id=""
                  name="brand"
                  onChange={handleChange}
                  value={product.brand}
                  required
                />
              </div>
            </div>

            <div className="form-group row formElement">
              <label for="" className="col-sm-2 col-form-label">
                Price
              </label>
              <div className="col-sm-10">
                <input
                  type="number"
                  className="form-control"
                  id=""
                  name="price"
                  onChange={handleChange}
                  value={product.price}
                  required
                />
              </div>
            </div>

            <div className="form-group row formElement">
              <label for="" className="col-sm-2 col-form-label">
                Quantity
              </label>
              <div className="col-sm-10">
                <input
                  type="number"
                  className="form-control"
                  id=""
                  name="quantity"
                  onChange={handleChange}
                  value={product.quantity}
                  required
                />
              </div>
            </div>

            <div class="form-group row formElement">
              <label for="" className="col-sm-2 col-form-label">
                Type
              </label>
              <div className="col-sm-10">
                <select
                  id=""
                  class="form-control"
                  value={product.type}
                  onChange={handleChange}
                  name="type"
                >
                  <option selected={product.type === "Male"} value="Male">
                    Male
                  </option>
                  <option selected={product.type === "Female"} value="Female">
                    Female
                  </option>
                  <option selected={product.type === "Kids"} value="Kids">
                    Kids
                  </option>
                </select>
              </div>
            </div>

            <div className="form-group row formElement">
              <label for="" className="col-sm-2 col-form-label">
                Description
              </label>
              <div className="col-sm-10">
                <textarea
                  type="textArea"
                  className="form-control"
                  rows="6"
                  id=""
                  name="description"
                  onChange={handleChange}
                  value={product.description}
                  required
                />
              </div>
            </div>

            <div className="form-group row formElement">
              <label for="" className="col-sm-2 col-form-label">
                Product Image URL
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id=""
                  name="imageUrl"
                  onChange={handleChange}
                  value={product.imageUrl}
                  required
                />
              </div>
            </div>

            <br />
            <div className="form-group row">
              <div className="col-sm-10">
                <button type="submit" className="btn btn-dark btn-lg formBtn">
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
