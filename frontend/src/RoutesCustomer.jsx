import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import NavBarCustomer from "./components/NavBarCustomer";

function RoutesCustomer() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/home"
          element={
            <NavBarCustomer number={1}>
              <Home />
            </NavBarCustomer>
          }
        />
        <Route path="/about" element={<p>about</p>} />
        <Route path="/services" element={<p>services</p>} />
        <Route path="/pages" element={<p>pages</p>} />
        <Route path="/shop" element={<p>shop</p>} />
        <Route path="/blog" element={<p>blog</p>} />
        <Route path="/contact" element={<p>contact</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesCustomer;
