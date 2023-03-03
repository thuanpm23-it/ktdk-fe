import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import Input from "./Input";
import { toast } from "react-toastify";
function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

function ProductEdit(props) {
  const navigate = useNavigate();
  function back() {
    navigate("/product");
  }
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [file1, setFile1] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  async function editProduct(id) {
    const formData = new FormData();
    formData.append("pro_name", name);
    formData.append("pro_desc", desc);
    formData.append("image", file1);
    formData.append("price", price);
    formData.append("category", category);
    let result = await fetch(
      "http://127.0.0.1:8000/api/updateproduct/" + id + "?_method=PUT",
      {
        method: "POST",
        body: formData,
      }
    );
    navigate("/product");
    toast.success("Cập nhật sản phẩm thành công");
  }
  async function fetchData() {
    let result = await fetch(
      "http://127.0.0.1:8000/api/product/" + props.router.params.id
    );
    result = await result.json();
    setData(result);
    setName(result.pro_name);
    setDesc(result.pro_desc);
    setFile1(result.image_1);
    setPrice(result.price);
    setCategory(result.category);
  }
  return (
    <>
      <div className="container mt-4 mb-4">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card border-primary bt-5">
              <div className="card-header">
                <div className="row">
                  <div className="col">
                    <h3 className="card-title">
                      Product <small className="text-muted">edit</small>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <Input
                  label="Name"
                  onChange={(e) => setName(e.target.value)}
                  defaultValue={data.pro_name}
                  required
                />
                <Input
                  label="Description"
                  onChange={(e) => setDesc(e.target.value)}
                  rows="3"
                  defaultValue={data.pro_desc}
                  required
                />
                <Input
                  label="Image"
                  onChange={(e) => setFile1(e.target.files[0])}
                  type="file"
                  defaultValue={data.image_1}
                  required
                />
                <img
                  className="offset-sm-3 mb-3"
                  style={{ width: 100 }}
                  src={"http://127.0.0.1:8000/" + data.image}
                />

                <Input
                  label="Price"
                  onChange={(e) => setPrice(e.target.value)}
                  defaultValue={data.price}
                  required
                />
                <Input
                  label="Category"
                  onChange={(e) => setCategory(e.target.value)}
                  defaultValue={data.category}
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
                  onClick={() => editProduct(data.id)}
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
    </>
  );
}

export default withRouter(ProductEdit);
