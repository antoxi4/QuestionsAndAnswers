'use strict';

const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'assets/');
const APP_DIR = path.resolve(__dirname, 'browser');

module.exports = {
  context: APP_DIR,

  entry: "index.js",

  output: {
    filename: "browser.bundle.js",
    path: BUILD_DIR,
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      }
    ]
  }
};
