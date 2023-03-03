import { useNavigate } from "react-router-dom";
import Input from "./Input";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

function ProductAdd() {
  const navigate = useNavigate();
  function back() {
    navigate("/product");
  }
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [file1, setFile1] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  async function addProduct() {
    console.warn(name, desc, file1, price, category);
    const formData = new FormData();

    formData.append("pro_name", name);
    formData.append("pro_desc", desc);
    formData.append("image", file1);
    formData.append("price", price);
    formData.append("category", category);

    let result = await fetch("http://127.0.0.1:8000/api/addproduct", {
      method: "POST",
      body: formData,
    });
    navigate("/product");
    toast.success("Thêm sản phẩm thành công");
  }
  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card border-primary bt-5">
            <div className="card-header">
              <div className="row">
                <div className="col">
                  <h3 className="card-title">
                    Product <small className="text-muted">new</small>
                  </h3>
                </div>
              </div>
            </div>

            <div className="card-body">
              <Input
                label="Name"
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Input
                label="Description"
                onChange={(e) => setDesc(e.target.value)}
                rows="3"
                required
              />
              <Input
                label="Image"
                onChange={(e) => setFile1(e.target.files[0])}
                type="file"
                required
              />

              <Input
                label="Price"
                onChange={(e) => setPrice(e.target.value)}
                required
              />
              <Input
                label="Category"
                onChange={(e) => setCategory(e.target.value)}
                required
              />
            </div>
            <div className="card-footer text-center">
              <button
                onClick={back}
                type="button"
                className="btn btn-secondary me-1"
              >
                Back
              </button>
              <button
                onClick={addProduct}
                type="button"
                className="btn btn-primary"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductAdd;
