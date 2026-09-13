/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
    },
    extend: {
      screens: {
        xs: "420px",
      },
      colors: {
        /* ---- Legacy brand aliases (kept so existing markup keeps working) ---- */
        brandDarkMaroon: "#40342F",
        brandLightMaroon: "#AD8E61",
        brandWhite: "#FEFEFE",
        brandBlack: "#241C1A",
        brandGrey: "#8B8E8A", // was "#8B8V8A" — invalid hex, never rendered

        /* ---- Graded brand palette ---- */
        gold: {
          50: "#FAF6F0",
          100: "#F3EBDD",
          200: "#E7D6BC",
          300: "#D9BE97",
          400: "#C4A47B",
          500: "#AD8E61",
          600: "#96784F",
          700: "#7A6141",
          800: "#5F4C35",
          900: "#46392A",
          950: "#291F17",
        },
        ink: {
          50: "#F7F6F5",
          100: "#EDEBEA",
          200: "#D8D4D1",
          300: "#B9B2AE",
          400: "#918884",
          500: "#6F6560",
          600: "#574E4A",
          700: "#40342F",
          800: "#332A26",
          900: "#241C1A",
          950: "#171110",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Outfit", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        roboto: ["Inter", "sans-serif"],
        openSans: ["Inter", "sans-serif"],
      },
      fontSize: {
        "fluid-h1": "clamp(2.25rem, 1.2rem + 4.4vw, 4.75rem)",
        "fluid-h2": "clamp(1.75rem, 1.1rem + 2.6vw, 3rem)",
        "fluid-h3": "clamp(1.35rem, 1rem + 1.4vw, 2rem)",
        "fluid-body": "clamp(0.95rem, 0.9rem + 0.2vw, 1.075rem)",
      },
      boxShadow: {
        soft: "0 2px 8px -2px rgb(36 28 26 / 0.08), 0 8px 24px -8px rgb(36 28 26 / 0.12)",
        lift: "0 8px 20px -6px rgb(36 28 26 / 0.16), 0 24px 48px -16px rgb(36 28 26 / 0.22)",
        gold: "0 10px 30px -10px rgb(173 142 97 / 0.55)",
      },
      backgroundImage: {
        "gold-sheen":
          "linear-gradient(110deg, transparent 25%, rgb(255 255 255 / 0.35) 50%, transparent 75%)",
        "ink-fade":
          "linear-gradient(to bottom, rgb(36 28 26 / 0.85) 0%, rgb(36 28 26 / 0.35) 45%, transparent 100%)",
        "hero-veil":
          "linear-gradient(to top, rgb(23 17 16 / 0.92) 0%, rgb(23 17 16 / 0.55) 45%, rgb(23 17 16 / 0.35) 100%)",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "out-back": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      transitionDuration: {
        400: "400ms",
        600: "600ms",
        900: "900ms",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translate3d(0, 28px, 0)" },
          to: { opacity: "1", transform: "translate3d(0, 0, 0)" },
        },
        "fade-down": {
          from: { opacity: "0", transform: "translate3d(0, -28px, 0)" },
          to: { opacity: "1", transform: "translate3d(0, 0, 0)" },
        },
        "slide-in-left": {
          from: { opacity: "0", transform: "translate3d(-40px, 0, 0)" },
          to: { opacity: "1", transform: "translate3d(0, 0, 0)" },
        },
        "slide-in-right": {
          from: { opacity: "0", transform: "translate3d(40px, 0, 0)" },
          to: { opacity: "1", transform: "translate3d(0, 0, 0)" },
        },
        "zoom-in": {
          from: { opacity: "0", transform: "scale(0.94)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        "ken-burns": {
          "0%": { transform: "scale(1) translate3d(0, 0, 0)" },
          "100%": { transform: "scale(1.12) translate3d(0, -1.5%, 0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        "drawer-in": {
          from: { opacity: "0", transform: "translateX(-100%)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-down": "fade-down 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        "slide-in-left": "slide-in-left 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        "slide-in-right":
          "slide-in-right 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        "zoom-in": "zoom-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) both",
        "ken-burns": "ken-burns 9s ease-out both",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.2s infinite",
        "drawer-in": "drawer-in 0.35s cubic-bezier(0.16, 1, 0.3, 1) both",
      },
    },
  },
  plugins: [],
};
