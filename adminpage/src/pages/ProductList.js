import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

function ProductList() {
  const navigate = useNavigate();
  function add() {
    navigate("/add");
  }
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  async function deleteOperation(id) {
    let result = await fetch("http://127.0.0.1:8000/api/delete/" + id, {
      method: "DELETE",
    });
    result = await result.json();
    console.warn(result);
    fetchData();
    toast.success("Xóa sản phẩm thành công");
  }
  async function fetchData() {
    let result = await fetch("http://127.0.0.1:8000/api/list");
    result = await result.json();
    setData(result);
  }
  async function search(key) {
    console.warn(key);
    let result = await fetch("http://127.0.0.1:8000/api/search/" + key);
    result = await result.json();
    setData(result);
  }
  return (
    <>
      <div className="container mt-4">
        <div className="input-group rounded mb-3">
          <input
            type="search"
            className="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
            onChange={(e) => search(e.target.value)}
          />
        </div>
        <div className="card border-primary bt-5">
          <div className="card-header">
            <div className="row">
              <div className="col">
                <h3 className="card-title">
                  Product <small className="text-muted">list</small>
                </h3>
              </div>
              <div className="col-auto">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#editModal"
                  onClick={add}
                >
                  <i className="bi-plus-lg"></i> Add
                </button>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered border-primary table-hover table-striped">
                <thead>
                  <tr className="table-primary border-primary">
                    <th style={{ width: "50px" }}>Id</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Img</th>
                    {/* <th>Img_2</th>
                    <th>Img_3</th>
                    <th>Img_4</th> */}
                    <th>Price</th>
                    <th>Category</th>
                    <th style={{ width: "80px" }}></th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.pro_name}</td>
                      <td>{item.pro_desc}</td>
                      <td>
                        <img
                          style={{ width: 100 }}
                          src={"http://127.0.0.1:8000/" + item.image}
                        />
                      </td>

                      <td>{item.price}</td>
                      <td>{item.category}</td>

                      <td>
                        <Link to={"update/" + item.id}>
                          <span style={{ cursor: "pointer" }}>
                            <i className="bi-pencil-square text-primary"></i>
                          </span>
                        </Link>
                        <span
                          style={{ cursor: "pointer" }}
                          onClick={() => deleteOperation(item.id)}
                        >
                          <i className="bi-trash text-danger"></i>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList;
