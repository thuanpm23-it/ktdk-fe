import { Route, Routes } from "react-router-dom";
import Home from "./../pages/Home";
import ProductList from "../pages/ProductList";
import ProductEdit from "../components/ProductEdit";
import NotFound from "./../pages/NotFound";
import Login from "./../pages/Login";
import Protected from "../pages/Protected";
import ProductAdd from "./../components/ProductAdd";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/product" element={<Protected Cmp={ProductList} />} />
      {/* <Route path="/product/:id" element={<Protected Cmp={ProductEdit} />} /> */}
      <Route path="/not-found" element={<NotFound />} />
      <Route path="/*" element={<NotFound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/add" element={<Protected Cmp={ProductAdd} />} />
      <Route
        path="/product/update/:id"
        element={<Protected Cmp={ProductEdit} />}
      />
    </Routes>
  );
}

export default Routers;
