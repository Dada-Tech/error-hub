/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,tsx}',
  ],

  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },

    colors: {
      'blue': '#0089ED',
      'lightBlue': '#2196F3',
      'white': '#FFFFFF',
      'lightGray': '#8D8D8D',
      'black': '#000000',
      'secondBlack': '#00204A',
    },

    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      }
    }
  },

  fontFamily: {
    poppins: ['"Poppins"', 'sans-serif'],
    saira: ['"Saira SemiCondensed"', 'serif'],
  },

  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
