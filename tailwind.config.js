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
      'white': '#FFFFFF',
      'lightgray': '#8D8D8D',
      'black': '#000000',
      'secondBlack': '#00204A',
    },

    width: {
      '16': '3rem',
    },

    container: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',

      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
        'px-4': '22rem, 19rem',
      }
    }
  },

  fontFamily: {
    poppins: ['Poppins', 'sans-serif'],
    saira: ['"Saira SemiCondensed"', 'serif'],
    sans: ['Helvetica', 'Arial', 'sans-serif'],
  },

  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
