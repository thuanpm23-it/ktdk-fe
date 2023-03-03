import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { delCart, addCart, delAllCart } from "../redux/action";
import { toast } from "react-toastify";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);

  return (
    <>
      <section className="shopping-cart spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {state.length === 0 ? (
                <h2 className="fs-4 text-center">Your cart is Empty</h2>
              ) : (
                <>
                  <div className="cart-table">
                    <table>
                      <thead>
                        <tr>
                          <th>Image</th>
                          <th className="p-name">Product Name</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Total</th>
                          <th>
                            <i className="ti-close"></i>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {state.map((product, index) => (
                          <Tr product={product} key={index} />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const Tr = ({ product }) => {
  const dispatch = useDispatch();

  const handleButton1 = (item) => {
    dispatch(delCart(item));
  };
  const handleButton2 = (item) => {
    dispatch(addCart(item));
  };
  const handleButton3 = (item) => {
    dispatch(delAllCart(item));
    toast.success("Đã xóa sản phẩm!");
  };
  return (
    <>
      <tr>
        <td className="cart-pic first-row">
          <img
            src={"http://127.0.0.1:8000/" + product.image}
            alt={product.pro_name}
          />
        </td>
        <td className="cart-title first-row">
          <h5>{product.pro_name}</h5>
        </td>
        <td className="p-price first-row">${product.price}</td>
        <td className="qua-col first-row">
          <div className="quantity">
            <div className="pro-qty">
              <span
                className="dec qtybtn"
                onClick={() => handleButton1(product)}
              >
                -
              </span>
              <input type="text" value={product.qty} />
              <span
                className="inc qtybtn"
                onClick={() => handleButton2(product)}
              >
                +
              </span>
            </div>
          </div>
        </td>
        <td className="total-price first-row">
          ${product.qty * product.price}
        </td>
        <td className="close-td first-row">
          <i className="ti-close" onClick={() => handleButton3(product)}></i>
        </td>
      </tr>
    </>
  );
};

export default Cart;
