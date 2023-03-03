import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Products from "./Products";

const Shop = () => {
  return (
    <>
      <section className="product-shop spad">
        <div className="container">
          <div className="row">
            <div className="col-lg order-1 order-lg-2">
              <div className="product-list">
                <div className="row">
                  <Products />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
