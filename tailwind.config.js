module.exports = {
  future: {
    removeDeprecateGapUtilities: true,
  },

  purge: {
    content: ['./src/**/*.js', './src/**/**/*.js'],
  },

  theme: {
    fill: (theme) => ({
      red: theme('color.red.primary'),
    }),
    colors: {
      white: '#ffffff',
      blue: {
        medium: '#005c98',
      },
      black: {
        light: '#005c98',
        faded: '#00000059',
      },
      gray: {
        base: '#616161',
        background: '#fafafa',
        primary: '#dbdbdb',
      },
      red: {
        primary: '#ed4956',
      },
    },
  },
}
