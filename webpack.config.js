const path = require('path');

module.exports = {
  entry: './qwe.js',
  output: {
    filename: 'qwe.js',
    path: path.resolve(__dirname, '../'),
    libraryTarget: 'amd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      }
    ]
  },
  devtool: 'source-map'
};
