/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "custom-purple": "#7180AC",
      "custom-blue": "#A8D0DB",
      "custom-dark-blue": "#2B4570",
      "custom-orange": "#E49273",
      "custom-brown": "#A37A74",
    },
    extend: {},
  },
  plugins: [],
};
