import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/");
    }
  }, []);

  async function login() {
    console.warn(email, password);

    let item = { email, password };

    let result = await fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });

    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    navigate("/");
  }

  return (
    <>
      <div className="container h-100 mt-5">
        <div className="row justify-content-center h-100 align-items-center">
          <div className="col-sm-8 col-lg-5">
            <div className="card bg-primary">
              <div className="card-header text-white">
                <h4 className="card-title mb-0">
                  <i className="bi-grid-3x3-gap-fill" /> Login
                </h4>
              </div>
              <div className="card-body bg-white rounded-bottom">
                <Input
                  label="Email"
                  id="txtEmail"
                  placeholder="Enter user email"
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  label="Password"
                  type="password"
                  id="txtPassword"
                  placeholder="Enter password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="row">
                  <div className="offset-sm-3 col-auto">
                    <button onClick={login} className="btn btn-primary">
                      Sign in
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
