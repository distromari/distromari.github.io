// tailwind.config.js
module.exports = {
  separator: ':',
  theme: {
    fontFamily: {
      light: ['FiraCode Light'],
      regular: ['FiraCode Regular'],
      medium: ['FiraCode Medium'],
      semibold: ['FiraCode SemiBold'],
      bold: ['FiraCode Bold']
    }
  },
  rules: [
    {
      use: [
        'vue-style-loader',
        'css-loader',
        'sass-loader'
      ]
    }
  ]
}
