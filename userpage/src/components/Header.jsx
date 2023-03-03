import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
const Header = () => {
  const state = useSelector((state) => state.handleCart);
  return (
    <>
      <header className="header-section">
        <div className="header-top">
          <div className="container">
            <div className="ht-left">
              <div className="mail-service">
                <i className=" fa fa-envelope"></i>
                nhom8@saigontech.edu.vn
              </div>
              <div className="phone-service">
                <i className=" fa fa-phone"></i>
                +00 00.000.000
              </div>
            </div>
            <div className="ht-right">
              <a href="/#" className="login-panel">
                <i className="fa fa-user"></i>My Account
              </a>

              <div className="top-social">
                <a href="/#">
                  <i className="ti-facebook"></i>
                </a>
                <a href="/#">
                  <i className="ti-twitter-alt"></i>
                </a>
                <a href="/#">
                  <i className="ti-linkedin"></i>
                </a>
                <a href="/#">
                  <i className="ti-pinterest"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="inner-header">
            <div className="row">
              <div className="col-lg-2 col-md-2">
                <div className="logo">
                  <NavLink to={"/"}>E-Shop</NavLink>
                </div>
              </div>
              <div className="col-lg-7 col-md-7">
                <div className="advanced-search">
                  <button type="button" className="category-btn">
                    All Categories
                  </button>
                  <div className="input-group">
                    <input type="text" placeholder="What do you need?" />
                    <button type="button">
                      <i className="ti-search"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 text-right col-md-3">
                <ul className="nav-right">
                  <li className="heart-icon">
                    <a href="/#">
                      <i className="icon_heart_alt"></i>
                      <span>1</span>
                    </a>
                  </li>
                  <motion.li whileHover={{ scale: 1.1 }} className="cart-icon">
                    <NavLink to={"/cart"}>
                      <i className="icon_bag_alt"></i>
                      <span>{state.length}</span>
                    </NavLink>
                  </motion.li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-item">
          <div className="container">
            <nav className="nav-menu mobile-menu">
              <ul>
                <li>
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/products"}>Shop</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}>About Us</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}>Contact</NavLink>
                </li>
                <li>
                  <NavLink to={"/cart"}>Cart</NavLink>
                </li>
              </ul>
            </nav>
            <div id="mobile-menu-wrap"></div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
