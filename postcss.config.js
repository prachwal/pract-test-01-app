export default {
  plugins: {
    autoprefixer: {
      // Browsers we want to support
      overrideBrowserslist: [
        '> 0.5%',
        'last 2 versions',
        'Firefox ESR',
        'not dead'
      ]
    }
  }
}