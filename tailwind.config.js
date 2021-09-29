module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  mode: 'jit',
  theme: {
    container: {
      center: true,
      padding: '5rem'
    },
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
      'ubuntu': ['Ubuntu', 'sans-serif'],
      'ubuntu-condensed': ['Ubuntu Condensed', 'sans-serif'],
      'turret-road': ['Turret Road', 'cursive'],
    },
    extend: {
      colors: {
        arknights: {
          pink: '#FB7AFC',
          purple: '#A239EA',
          blue: '#5C33F6'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
