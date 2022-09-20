/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false,
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "@/assets/images/products/Payment-Tablet-Terminal.png",
    "@/assets/images/products/POS.png",
  ],
  theme: {
    colors: {
      sub: "#FFAE03",
      main: "#64B6AC",
      bluu: "#51BBFE",
    },
    extend: {
      backgroundImage: {
        users: "url('@/assets/images/mark-oflynn.jpeg')",
        hero: "url('@/assets/images/clay-banks-unsplash.jpeg')",
        about: "url('@/assets/images/komarov-egor.jpeg')",
        product: "url('@/assets/images/mohammad-metri.jpg')",
        icon: "url('@/assets/images/3geepaylogo.png')",
        pos1: "url('@/assets/images/products/Payment-Tablet-Terminal.png')",
        pos2: "url('@/assets/images/products/POS.png')",
      },
      fontFamily: {
        title: ["Syncopate"],
        sans: ["Sen"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("flowbite/plugin.js")],
};
