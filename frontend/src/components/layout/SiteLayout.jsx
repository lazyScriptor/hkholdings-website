import React from "react";
import { Outlet } from "react-router-dom";
import NavBarCustomer from "../NavBarCustomer";
import BackToTop from "../ui/BackToTop";

/**
 * Chrome shared by every public page: header (with mobile drawer) + the routed
 * page + the floating back-to-top control.
 *
 * Replaces the previous pattern of wrapping each route in <NavBarCustomer>
 * individually, which also rendered the mobile nav twice per page.
 */
export default function SiteLayout() {
  return (
    <NavBarCustomer>
      <main id="content">
        <Outlet />
      </main>
      <BackToTop />
    </NavBarCustomer>
  );
}
