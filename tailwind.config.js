/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        letter: "#f10c0f",
        hero: "#fffeef"
      },
      backgroundImage: {
        personal: "url('./images/cygno-aquario-foto1.png')"
      }
    },
  },
  plugins: [],
}