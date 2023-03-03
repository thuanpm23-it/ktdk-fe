import { useParams, NavLink, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import ProductSingle from "./Products";
import { toast } from "react-toastify";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
    toast.success("Thêm sản phẩm thành công!");
  };
  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(`http://127.0.0.1:8000/api/product/${id}`);
      setProduct(await response.json());
    };
    getProduct();
  }, []);

  return (
    <>
      <section className="product-shop spad page-details">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="row">
                <div className="col-lg-6">
                  <div className="product-pic-zoom">
                    <img
                      className="product-big-img"
                      src={"http://127.0.0.1:8000/" + product.image}
                      alt={product.pro_name}
                    />
                    <div className="zoom-icon">
                      <i className="fa fa-search-plus"></i>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="product-details">
                    <div className="pd-title">
                      <span>{product.category}</span>
                      <h3>{product.pro_name}</h3>
                    </div>

                    <div className="pd-desc">
                      <p>{product.pro_desc}</p>
                      <h4>${product.price}</h4>
                    </div>

                    <div className="quantity">
                      <Link
                        className="primary-btn pd-cart"
                        onClick={() => addProduct(product)}
                      >
                        Add To Cart
                      </Link>
                    </div>

                    <div className="pd-share">
                      <div className="pd-social">
                        <a href="#">
                          <i className="ti-facebook"></i>
                        </a>
                        <a href="#">
                          <i className="ti-twitter-alt"></i>
                        </a>
                        <a href="#">
                          <i className="ti-linkedin"></i>
                        </a>
                      </div>
                    </div>
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

export default ProductDetail;
