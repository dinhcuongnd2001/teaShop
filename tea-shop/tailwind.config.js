/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#38761d",
        price: "#e74c3c",
        secondary: "#274e13",
      },
      boxShadow: {
        header: "5px 5px 15px -5px #38761d",
      },
    },
  },
  plugins: [],
};
