/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: { 
    extend: {
      fontFamily: {
        'sans': ['Syne', 'Montserrat', 'sans-serif'],
        'primary': ['Syne', 'sans-serif'],
        'secondary': ['Montserrat', 'sans-serif'],
        'syne': ['Syne', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      }
    } 
  },
  plugins: []
};