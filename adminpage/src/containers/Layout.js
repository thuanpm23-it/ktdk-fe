import React, { useState, useEffect } from "react";
import Routers from "../router/Routers";
import Header from "./Header";

function Layout() {
  return (
    <>
      <Header />
      <Routers />
    </>
  );
}

export default Layout;
