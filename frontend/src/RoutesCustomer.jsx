import React, { Suspense } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavBarCustomer from "./components/NavBarCustomer";
import { tailChase } from "ldrs";
// Lazy load components for all routes
const Home = React.lazy(() => import("./pages/home/Home"));
// const About = React.lazy(() => import("./pages/about/About"));
// const Services = React.lazy(() => import("./pages/services/Services"));
// const Pages = React.lazy(() => import("./pages/pages/Pages"));
// const Shop = React.lazy(() => import("./pages/shop/Shop"));
// const Blog = React.lazy(() => import("./pages/blog/Blog"));
// const Contact = React.lazy(() => import("./pages/contact/Contact"));

function RoutesCustomer() {
  tailChase.register();
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          
          <l-tail-chase size="40" speed="1.75" color="black"></l-tail-chase>
        }
      >
        <Routes>
          <Route
            path="/home"
            element={
              <NavBarCustomer number={1}>
                <Home />
              </NavBarCustomer>
            }
          />
          <Route path="/about" element={<>about</>} />
          <Route path="/services" element={<>services</>} />
          <Route path="/pages" element={<>pages</>} />
          <Route path="/shop" element={<>shop</>} />
          <Route path="/blog" element={<>blog</>} />
          <Route path="/contact" element={<>contact</>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default RoutesCustomer;
