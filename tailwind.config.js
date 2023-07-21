/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,tsx}',
  ],

  theme: {

    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

    colors: {
      'blue': '#0089ED',
      'white': '#FFFFFF',
      'lightgray': '#8D8D8D',
      'black': '#000000',
      'secondBlack': '#00204A',
    }
  },

  fontFamily: {
    sans: ['Poppins', 'sans-serif'],
    serif: ['Saira SemiCondensed','serif'],
  },

  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

