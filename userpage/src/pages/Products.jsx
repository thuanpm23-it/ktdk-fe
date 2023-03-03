import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const ProductSingle = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);

  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("http://127.0.0.1:8000/api/list");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());

        console.log(filter);
      }

      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  return (
    <>
      <div className="col-12 text-center ">
        <div className="filter-control">
          <ul>
            <motion.li
              whileHover={{ scale: 1.1 }}
              onClick={() => setFilter(data)}
            >
              All
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              onClick={() => filterProduct("laptop")}
            >
              Laptop
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              onClick={() => filterProduct("smartphone")}
            >
              Smartphone
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              onClick={() => filterProduct("smartwatch")}
            >
              Smartwatch
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              onClick={() => filterProduct("tablet")}
            >
              Tablet
            </motion.li>
          </ul>
        </div>
      </div>
      {filter.map((product) => (
        <div className="col-sm-6 col-lg-4 mb-4" key={product.id}>
          <div className="card h-100 p-3 ">
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={"http://127.0.0.1:8000/" + product.image}
              className="card-img-top"
              alt={product.pro_name}
            />
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <p className="small">
                  <a href="#!" className="text-muted">
                    {product.category}
                  </a>
                </p>
              </div>

              <div className="d-flex justify-content-between">
                <NavLink to={`/products/${product.id}`}>
                  <h5 className="mb-0">{product.pro_name}</h5>
                </NavLink>

                <h5 className="text-dark mb-0">${product.price}</h5>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductSingle;
