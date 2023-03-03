import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem("user-info"));
  function logOut() {
    localStorage.clear();
    navigate("/login");
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Red Store
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {localStorage.getItem("user-info") ? (
            <>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/product">
                      Product
                    </NavLink>
                  </li>
                </ul>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <span className="nav-link">Admin: {user && user.name}</span>
                  </li>
                  <li className="nav-item">
                    <span className="nav-link" onClick={logOut}>
                      <i className="bi-box-arrow-right"></i>
                    </span>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/login">
                      Login
                    </NavLink>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </nav>
    </>
  );
}

export default Header;
