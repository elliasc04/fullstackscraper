/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/App.js"],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-radix")(),
  ],
}

