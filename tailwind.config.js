/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        users: "url('./src/assets/images/mark-oflynn.jpeg')",
        hero: "url('./src/assets/images/clay-banks-unsplash.jpeg')",
        about: "url('./src/assets/images/komarov-egor.jpeg')",
        product: "url('./src/assets/images/mohammad-metri.jpg')",
        icon: "url('./src/assets/images/3geepaylogo.png')"
      },
      fontFamily:{
        'title': ['Syncopate'],
        'sans': ['Sen']
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin.js')
  ],
}
