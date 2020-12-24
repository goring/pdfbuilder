const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.trueGray,
      coolGray: colors.coolGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      blue: colors.blue,
      orange: colors.orange,
      amber: colors.amber,
      green: colors.green,
      emerald: colors.emerald,
      blueGray: colors.blueGray,
      warmGray: colors.warmGray,
      cyan: colors.cyan,
      white: { 300: "#fafafa", 400: "#f2f2f2", DEFAULT: colors.white },
      darkTheme: { 400: "#2B2A2E", 500: "#141318", DEFAULT: "#0c0b10", 600: "#100F14", 700: "#141318", 800: "#141318" },
      customGrey: {
        950: '#26252C',
        900: '#1A1C1F',
        800: '#202327',
        700: '#2A2D32',
        600: '#363A3F',
        500: '#474C52',
        400: '#60656C',
        300: '#878B92',
        200: '#BCBFC2',
        100: '#E4E5E7',
        50: '#F4F5F5',
      },
      black: { DEFAULT: '#000' },

      customBlue: '#1661CA',
      customCyan: '#148BB3',
    },

    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
