/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {

      fontFamily: { 
          'poppins': ['Poppins' ,'sans-serif'], 
          'mada': ['Mada', 'sans-serif'],
          'lato': ['Lato', 'sans-serif']
        
        },
        height:{ 
          '35': '35rem'
        },
        width:{
          // '80':'80%',
          '85':'85%',
          '50': '50%',
          '40':'40%'
        }
    },
  },
  plugins: [],
}

