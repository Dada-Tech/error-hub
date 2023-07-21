/** @type {import('tailwindcss').Config} */
// @import('tailwindcss').Config;
module.exports = {
  content: [
    './pages/**/*.{html,js,tsx}',
    './components/**/*.{html,js,tsx}',
    './node_modules/@my-company/tailwind-components/**/*.js',
  ],
  theme: {
    // fill: ({ theme }) => ({
    //   Blue: theme('colors.blue')
    // })
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
      'black': '#000000'
    }
  },
  fontFamily: {
    sans: ['Poppins', 'sans-serif'],
    serif: ['Saira SemiCondensed','serif'],
    // serif: ['Merriweather', 'serif'],
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

