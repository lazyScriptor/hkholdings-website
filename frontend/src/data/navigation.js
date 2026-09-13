/** Single source of truth for site navigation, shared by the navbar, the
 *  mobile drawer and the footer. */

export const PHONE_DISPLAY = "070 5123 804";
export const PHONE_HREF = "tel:+94705123804";

export const MAIN_LINKS = [
  { id: "home", name: "Home", to: "/" },
  { id: "about", name: "About", to: "/about" },
  { id: "services", name: "Services", to: "/services/all" },
  { id: "blog", name: "Blog", to: "/blog" },
  { id: "contact", name: "Contact", to: "/contact" },
];

export const SERVICE_LINKS = [
  { id: "railings", name: "Railings", to: "/services/all/railings" },
  {
    id: "warehouse-construction",
    name: "Warehouse Construction",
    to: "/services/all/warehouse-construction",
  },
  { id: "wood-decking", name: "Wood Decking", to: "/services/all/wood-decking" },
  { id: "staircases", name: "Staircases", to: "/services/all/staircases" },
  { id: "canopies", name: "Canopies", to: "/services/all/canopies" },
  { id: "gates", name: "Gates", to: "/services/all/gates" },
  { id: "roofing", name: "Roofing", to: "/services/all/roofing" },
  {
    id: "fences-and-grills",
    name: "Fences & Grills",
    to: "/services/all/fences-and-grills",
  },
];
