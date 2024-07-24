/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  
  theme: {
    extend: {
   
      fontFamily: {
        body: ["Open Sans", "sans-serif", "Arial", "Helvetica Neue", "Inter"],
      },
      colors: {
        lightBlue: '#2463EB',
      },
    },
  },
  plugins: [],
}

