/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        'bg-color': '#141414',
        'second-bg-color': '#191919',
        'main-color': '#0077ff',
      },
    },
  },
  plugins: [],
}
