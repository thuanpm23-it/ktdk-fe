import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Products from "./Products";

const Home = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-items owl-carousel">
          <div
            className="single-hero-items set-bg"
            data-setbg="assets/img/21-min.jpg"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-5">
                  <span>Laptop</span>
                  <h1>Black friday</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                  </p>

                  <NavLink to={"/products"} className="primary-btn">
                    Shop Now
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div
            className="single-hero-items set-bg"
            data-setbg="assets/img/2212-min.png"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-5">
                  <span>Smartphone</span>
                  <h1>Black friday</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                  </p>
                  <NavLink to={"/products"} className="primary-btn">
                    Shop Now
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="banner-section spad">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4">
              <div className="single-banner">
                <img src="assets/img/6-min.jpg" alt="" />
                <div className="inner-text">
                  <h4>Laptop</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-banner">
                <img src="assets/img/1-min.jpg" alt="" />
                <div className="inner-text">
                  <h4>Smartphone</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-banner">
                <img src="assets/img/22-min.jpg" alt="" />
                <div className="inner-text">
                  <h4>Tablet</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="women-banner spad">
        <div className="container-fluid">
          <div className="row">
            <Products />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
