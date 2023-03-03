import React from "react";

const About = () => {
  return (
    <>
      <section className="latest-blog spad">
        <div className="container">
          <section class="py-5">
            <div class="container">
              <div class="row align-items-center py-5">
                <div class="col-md-8 ">
                  <h1>About Us</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div class="col-md-4">
                  <img src="assets/img/21.jpg" alt="About Hero" />
                </div>
              </div>
            </div>
          </section>
          <div className="benefit-items">
            <div className="row">
              <div className="col-lg-4">
                <div className="single-benefit">
                  <div className="sb-icon">
                    <img src="assets/img/icon-1.png" alt="" />
                  </div>
                  <div className="sb-text">
                    <h6>Free Shipping</h6>
                    <p>For all order over 99$</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-benefit">
                  <div className="sb-icon">
                    <img src="assets/img/icon-2.png" alt="" />
                  </div>
                  <div className="sb-text">
                    <h6>Delivery On Time</h6>
                    <p>If good have prolems</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-benefit">
                  <div className="sb-icon">
                    <img src="assets/img/icon-1.png" alt="" />
                  </div>
                  <div className="sb-text">
                    <h6>Secure Payment</h6>
                    <p>100% secure payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
