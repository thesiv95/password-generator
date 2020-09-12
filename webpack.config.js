const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

module.exports = {
  entry: './src/js/Controller.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};