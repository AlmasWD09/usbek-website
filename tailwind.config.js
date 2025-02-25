/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#FF4D4D', 
        'secondery':'#007AFF', 
      },
      fontFamily: {
        'Roboto': ["Roboto", "serif"],
        'Poppins': ["Poppins", "serif"],
      },
    },
  },
  plugins: [],
}