module.exports = {
  entry: './source/index.js',
  output: {
    filename: './distribution/index.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/
      }
    ]
  }
};