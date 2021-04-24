module.exports = {
  future: {
    removeDeprecateGapUtilities: true,
  },

  purge: {
    content: ['./src/**/*.js', './src/**/**/*.js'],
  },

  theme: {
    fill: (theme) => ({
      red: theme('colors.red.primary'),
    }),
  },
}
