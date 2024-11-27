import React, { Suspense } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavBarCustomer from "./components/NavBarCustomer";
import { tailChase } from "ldrs";
import AboutUsMain from "./pages/aboutus/AboutUsMain";
// Lazy load components for all routes
const Home = React.lazy(() => import("./pages/home/Home"));
const About = React.lazy(() => import("./pages/aboutus/AboutUsMain"));
const Services = React.lazy(() => import("./pages/services/ServicesMain"));
// const Pages = React.lazy(() => import("./pages/pages/Pages"));
// const Shop = React.lazy(() => import("./pages/shop/Shop"));
const Blog = React.lazy(() => import("./pages/blog/BlogMain"));
const Contact = React.lazy(() => import("./pages/contactus/ContactUsMain"));

function RoutesCustomer() {
  tailChase.register();
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="w-screen h-screen bg-brandLightMaroon flex justify-center items-center">
            <l-tail-chase size="200" speed="2.0" color="white "></l-tail-chase>
          </div>
        }
      >
        <Routes>
          <Route
            path="/"
            element={
              <NavBarCustomer number={1}>
                <Home />
              </NavBarCustomer>
            }
          />
          <Route
            path="/about"
            element={
              <NavBarCustomer number={2}>
                <AboutUsMain />
              </NavBarCustomer>
            }
          />
          <Route
            path="/services"
            element={
              <NavBarCustomer number={3}>
                <Services />
              </NavBarCustomer>
            }
          />
          <Route path="/pages" element={<>pages</>} />
          <Route path="/shop" element={<>shop</>} />
          <Route
            path="/blog"
            element={
              <NavBarCustomer number={4}>
                <Blog />
              </NavBarCustomer>
            }
          />
          <Route
            path="/contact"
            element={
              <NavBarCustomer number={5}>
                <Contact />
              </NavBarCustomer>
            }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default RoutesCustomer;
