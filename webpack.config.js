const path = require('path');

module.exports = {
  entry: './src/SimpleTable.js',
  output: {
    filename: 'SimpleTable.js',
    path: path.resolve(__dirname, './'),
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
