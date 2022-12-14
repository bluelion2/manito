/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      blues: {
        100: '#ECF8FF',
        200: '#94DCFF',
        300: '#00ABFF',
        400: '#1A8EF9',
        500: '#00A5F5',
      },
      gray: {
        100: '#FAFAFA',
        200: '#F5F5F5',
        300: '#E8E8E8',
        400: '#E0E0E0',
        500: '#C0C0C0',
        600: '#959595',
        700: '#707070',
        800: '#5c5c5c',
        900: '#333333',
      },
      white: 'white',
    },
    extend: {},
  },
  plugins: [],
}
