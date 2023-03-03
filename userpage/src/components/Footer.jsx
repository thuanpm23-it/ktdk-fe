import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="footer-left">
                <div className="footer-logo">
                  <a href="/#">Nhóm 8</a>
                </div>
                <ul>
                  <li>Address: Trường Cao Đẳng Sài Gòn</li>
                  <li>Phone: +00 00.000.000</li>
                  <li>Email: nhom8@saigontech.edu.vn</li>
                </ul>
                <div className="footer-social">
                  <a href="/#">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="/#">
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a href="/#">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="/#">
                    <i className="fa fa-pinterest"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 offset-lg-1">
              <div className="footer-widget">
                <h5>Nhóm 8</h5>
                <ul>
                  <li>
                    <a href="/#">Minh Thuận</a>
                  </li>

                  <li>
                    <a href="/#">Ngọc Qúy</a>
                  </li>
                  <li>
                    <a href="/#">Minh Đức</a>
                  </li>
                  <li>
                    <a href="/#">Phùng Hùng</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="footer-widget">
                <h5>My Account</h5>
                <ul>
                  <li>
                    <NavLink to={"/login"}>My Account</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/contact"}>Contact</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/cart"}>Shopping Cart</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/products"}>Shop</NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="newslatter-item">
                <h5>Join Our Newsletter Now</h5>
                <p>
                  Get E-mail updates about our latest shop and special offers.
                </p>
                <form action="#" className="subscribe-form">
                  <input type="text" placeholder="Enter Your Mail" />
                  <button type="button">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
