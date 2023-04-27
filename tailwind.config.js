const {fontFamily} = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E0FF70",
        secondary: "#3069FE",
        dark: {
          50: "#FBFBFB",
          100: "#FDFDFD",
          200: "#8C8C8C",
          300: "#5F5E5E",
          400: "#565656",
          500: "#313030",
          600: "#222222",
          700: "#171D1C",
          800: "#101828",
        },
      },
      fontSize: {
        sm: ["10px", {lineHeight: "18px", letterSpacing: "0em"}],
        md: ["12px", {lineHeight: "16px", letterSpacing: "0em"}],
        base: ["14px", {lineHeight: "20px", letterSpacing: "0.02em"}],
        lg: ["16px", {lineHeight: "20px", letterSpacing: "0em"}],
        xl: ["18px", {lineHeight: "25px", letterSpacing: "0em"}],
        "2xl": ["20px", {lineHeight: "24px", letterSpacing: "0em"}],
        "3xl": ["24px", {lineHeight: "32px", letterSpacing: "0em"}],
        "4xl": ["40px", {lineHeight: "48px", letterSpacing: "0em"}],
        "5xl": ["64px", {lineHeight: "77px", letterSpacing: "0em"}],
        "6xl": ["80px", {lineHeight: "80px", letterSpacing: "0em"}],
      },
      fontFamily: {
        geomanist: ["'Geomanist'", ...fontFamily.sans],
        poppins: ["'Poppins'", ...fontFamily.sans],
        inter: ["'Inter'", ...fontFamily.sans],
      },
      boxShadow: {
        100: `0px 16px 24px 0px #75787E29`,
      },
    },
    container: {
      center: true,
      padding: "1rem",
    },
    screen: {
      sm: "600px",
      md: "768px",
      lg: "1020px",
      xl: "1360px",
    },
  },
  plugins: [],
};
