/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "Montserrat", "sans-serif"],
        serif: ["Outfit", "Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
