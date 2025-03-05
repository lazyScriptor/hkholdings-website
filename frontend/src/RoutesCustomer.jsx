import React, { Suspense } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { tailChase } from "ldrs";
import Staircases from "./pages/services/Staircases";
const NavBarCustomer = React.lazy(() => import("./components/NavBarCustomer"));
const MobileNavigation = React.lazy(() =>
  import("./components/MobileNavigation")
);
const AboutUsMain = React.lazy(() => import("./pages/aboutus/AboutUsMain"));
const Login = React.lazy(() => import("./pages/login/Login"));
const MainScreen = React.lazy(() => import("./pages/adminpanel/MainScreen"));
const Inquiries = React.lazy(() => import("./pages/adminpanel/Inquiries"));
const MainTextEditorPage = React.lazy(() =>
  import("./pages/blog/texteditor/MainTextEditorPage")
);
const BlogPostAdmin = React.lazy(() =>
  import("./pages/adminpanel/BlogPostAdmin")
);
const Railings = React.lazy(() => import("./pages/services/Railings"));
const WarehouseConstruction = React.lazy(() =>
  import("./pages/services/WarehouseConstruction")
);
const WoodDecking = React.lazy(() => import("./pages/services/WoodDecking"));
const Canopies = React.lazy(() => import("./pages/services/Canopies"));
const Roofing = React.lazy(() => import("./pages/services/Roofing"));
const Gates = React.lazy(() => import("./pages/services/Gates"));
const FencesAndGrills = React.lazy(() =>
  import("./pages/services/FencesAndGrills")
);

// Lazy load pages
const Home = React.lazy(() => import("./pages/home/Home"));
const About = React.lazy(() => import("./pages/aboutus/AboutUsMain"));
const Services = React.lazy(() => import("./pages/services/ServicesMain"));
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
          <Route path="/admin-panel" element={<Login />} />

          <Route path="/admin-dashboard" element={<MainScreen />} />
          <Route path="/admin-inquiries" element={<Inquiries />} />
          <Route path="/admin-blogs" element={<BlogPostAdmin />} />
          <Route path="/admin-blogs-create" element={<MainTextEditorPage />} />
          
          <Route
            path="/admin-blogs-edit/:id"
            element={<MainTextEditorPage />}
          />
          <Route
            path="/"
            element={
              <NavBarCustomer number={1}>
                <MobileNavigation />
                <Home />
              </NavBarCustomer>
            }
          />
          <Route
            path="/about"
            element={
              <NavBarCustomer number={2}>
                <MobileNavigation />
                <AboutUsMain />
              </NavBarCustomer>
            }
          />
          <Route path="/services/all">
            <Route
              path=""
              element={
                <NavBarCustomer number={3}>
                  <MobileNavigation />
                  <Services />
                </NavBarCustomer>
              }
            />
            <Route
              path="railings"
              element={
                <NavBarCustomer number={3}>
                  <MobileNavigation />
                  <Railings />
                </NavBarCustomer>
              }
            />
            <Route
              path="warehouse-construction"
              element={
                <NavBarCustomer number={3}>
                  <MobileNavigation />
                  <WarehouseConstruction />
                </NavBarCustomer>
              }
            />

            <Route
              path="wood-decking"
              element={
                <NavBarCustomer number={3}>
                  <MobileNavigation />
                  <WoodDecking />
                </NavBarCustomer>
              }
            />
            <Route
              path="staircases"
              element={
                <NavBarCustomer number={3}>
                  <MobileNavigation />
                  <Staircases />
                </NavBarCustomer>
              }
            />

            <Route
              path="canopies"
              element={
                <NavBarCustomer number={3}>
                  <MobileNavigation />
                  <Canopies />
                </NavBarCustomer>
              }
            />

            <Route
              path="roofing"
              element={
                <NavBarCustomer number={3}>
                  <MobileNavigation />
                  <Roofing />
                </NavBarCustomer>
              }
            />

            <Route
              path="gates"
              element={
                <NavBarCustomer number={3}>
                  <MobileNavigation />
                  <Gates />
                </NavBarCustomer>
              }
            />

            <Route
              path="fences-and-grills"
              element={
                <NavBarCustomer number={3}>
                  <MobileNavigation />
                  <FencesAndGrills />
                </NavBarCustomer>
              }
            />

          </Route>
          <Route path="/pages" element={<>pages</>} />
          <Route path="/shop" element={<>shop</>} />
          <Route
            path="/blog"
            element={
              <NavBarCustomer number={4}>
                <MobileNavigation />

                <Blog />
              </NavBarCustomer>
            }
          />
          <Route
            path="/contact"
            element={
              <NavBarCustomer number={5}>
                <MobileNavigation />

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
