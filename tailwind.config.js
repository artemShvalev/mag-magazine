module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      'primary': '#2d2928',
      'secondary': '#e0e0e0',
      'danger': '#b9b8b8',
      'navBarHover': '#cde514',
      
    })
  },
  FontFamily: {
    navBar: ['"Georgia Regular"'],
  },
  textColor: {
    'primary': '#c4c4c4',
    'secondary': '#ffed4a',
    'danger': '#e3342f',
    'typoFont': '#ff0000'
  },
  height: {
    nav: '50px'
  },
  inset: {
  '0': 0,
  '1': '320px'
  }
}
