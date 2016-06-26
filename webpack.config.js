var webpack = require('webpack');
var path    = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');
var IMG_DIR = path.resolve(__dirname, 'assets/images');

var config = {
  entry: APP_DIR + '/index.jsx',
  module : {
    loaders : [
      {
        test : /\.(jsx|js)?/,
        include : APP_DIR,
        loader : 'babel'
      },
      {
        test: /\.css?$/,
        loaders: [ 'style', 'raw' ],
        include: path.resolve(__dirname, '../')
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'file?name=[path][name].[hash].[ext]',
        include: IMG_DIR
      },
      {
        test: /\.svg$/,
        loader: 'file',
        include: IMG_DIR
      }
    ]
  },
  output: {
    path: BUILD_DIR,
    filename: '/assets/js/bundle.js'
  }
};

module.exports = config;