const path = require('path');

module.exports = {
  entry: './src/simpleTable.js',
  output: {
    filename: 'simpleTable.js',
    path: path.resolve(__dirname, './dist'),
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
