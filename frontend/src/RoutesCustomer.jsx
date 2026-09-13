import React, { Suspense } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { tailChase } from "ldrs";
import SiteLayout from "./components/layout/SiteLayout";
import ScrollToTop from "./components/ScrollToTop";

/* ---------------- Public pages ---------------- */
const Home = React.lazy(() => import("./pages/home/Home"));
const AboutUsMain = React.lazy(() => import("./pages/aboutus/AboutUsMain"));
const Services = React.lazy(() => import("./pages/services/ServicesMain"));
const Blog = React.lazy(() => import("./pages/blog/BlogMain"));
const Contact = React.lazy(() => import("./pages/contactus/ContactUsMain"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

/* ---------------- Service detail pages ---------------- */
const Railings = React.lazy(() => import("./pages/services/Railings"));
const WarehouseConstruction = React.lazy(() =>
  import("./pages/services/WarehouseConstruction")
);
const WoodDecking = React.lazy(() => import("./pages/services/WoodDecking"));
const Staircases = React.lazy(() => import("./pages/services/Staircases"));
const Canopies = React.lazy(() => import("./pages/services/Canopies"));
const Roofing = React.lazy(() => import("./pages/services/Roofing"));
const Gates = React.lazy(() => import("./pages/services/Gates"));
const FencesAndGrills = React.lazy(() =>
  import("./pages/services/FencesAndGrills")
);

/* ---------------- Admin pages ---------------- */
const Login = React.lazy(() => import("./pages/login/Login"));
const MainScreen = React.lazy(() => import("./pages/adminpanel/MainScreen"));
const Inquiries = React.lazy(() => import("./pages/adminpanel/Inquiries"));
const BlogPostAdmin = React.lazy(() =>
  import("./pages/adminpanel/BlogPostAdmin")
);
const MainTextEditorPage = React.lazy(() =>
  import("./pages/blog/texteditor/MainTextEditorPage")
);

/** Routes for the service detail pages, kept as data to avoid repetition. */
const SERVICE_ROUTES = [
  { path: "railings", element: <Railings /> },
  { path: "warehouse-construction", element: <WarehouseConstruction /> },
  { path: "wood-decking", element: <WoodDecking /> },
  { path: "staircases", element: <Staircases /> },
  { path: "canopies", element: <Canopies /> },
  { path: "roofing", element: <Roofing /> },
  { path: "gates", element: <Gates /> },
  { path: "fences-and-grills", element: <FencesAndGrills /> },
];

function PageLoader() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-ink-950">
      <l-tail-chase size="120" speed="2.0" color="#AD8E61" />
    </div>
  );
}

function RoutesCustomer() {
  tailChase.register();

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Public site — header/mobile nav supplied once by the layout */}
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUsMain />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/services/all">
              <Route index element={<Services />} />
              {SERVICE_ROUTES.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
            </Route>

            <Route path="*" element={<NotFound />} />
          </Route>

          {/* Admin — standalone, no public chrome */}
          <Route path="/admin-panel" element={<Login />} />
          <Route path="/admin-dashboard" element={<MainScreen />} />
          <Route path="/admin-inquiries" element={<Inquiries />} />
          <Route path="/admin-blogs" element={<BlogPostAdmin />} />
          <Route path="/admin-blogs-create" element={<MainTextEditorPage />} />
          <Route
            path="/admin-blogs-edit/:id"
            element={<MainTextEditorPage />}
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default RoutesCustomer;
