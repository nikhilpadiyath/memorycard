/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        indie: ['Indie Flower', 'cursive'],
      },
    },
    screens: {
      'sm': {'min': '300px', 'max': '480px'},
     
      'md': {'min': '480px', 'max': '700px'},
      
      'lg': {'min': '701px', 'max': '1020px'},
      
      'xl': {'min': '1021px', 'max': '1280px'},
      
      '2xl': {'min': '1281px'},
    
    },
  },
  plugins: [],
}

