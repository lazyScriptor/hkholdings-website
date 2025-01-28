/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
       brandDarkMaroon:"#40342F",
       brandLightMaroon:"#AD8E61",
       brandWhite:"#FEFEFE",
       brandBlack:"#241C1A",
       brandGrey:"#8B8V8A",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        // Add other trending fonts here
      },
      textColor: {
        DEFAULT: '#6B7280', 
      },
    },
  },
  plugins: [
  
  ],
};
