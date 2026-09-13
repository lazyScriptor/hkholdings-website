/**
 * Base URL for the backend API.
 *
 * This was previously hard-coded as "http://localhost:3000" in ~18 places
 * across the app, which meant any deployed build pointed at the visitor's own
 * machine (and was blocked outright as mixed content on an HTTPS site).
 *
 * Set VITE_API_URL at build time to point at the real API.
 */
export const API_BASE_URL =
  import.meta.env.VITE_API_URL?.replace(/\/$/, "") || "http://localhost:3000";

/** True when no real API host has been configured for this build. */
export const API_CONFIGURED = Boolean(import.meta.env.VITE_API_URL);

export default API_BASE_URL;
