/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': "Poppins",
        'bebas-neue': "Bebas Neue",
        'lato': "Lato",
        'bodoni-moda': "Bodoni Moda"
      },
      backgroundImage: {
        'background-color': 'linear-gradient(to right, #050A2F, #091A4A)',
      },
      backgroundColor: {
        'widget-color': "#1D43FF",
        'widget-color2': "#21213E",
        'background2-color': "#2700FF"
      },
      textColor: {
        'first-color': "#2D49FF"
      },
      borderColor: {
        'first-border': "#1D43FF"
      }
    },
  },
  plugins: [],
}