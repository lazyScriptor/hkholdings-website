import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * `base` is driven by VITE_BASE so the same source can be served from a
 * GitHub Pages project subpath (e.g. /hkholdings-website/) or from the root
 * of a custom domain. It defaults to "/" for local development.
 */
export default defineConfig({
  base: process.env.VITE_BASE || "/",
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 5173,
    strictPort: true,
  },
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
