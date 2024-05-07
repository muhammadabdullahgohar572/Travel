/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    screens:{
      sxx: "320px",
      mxx:"375px",
      xlxx:"425px",

    }
    },
  },
  plugins: [],
}