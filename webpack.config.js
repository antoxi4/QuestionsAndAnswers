'use strict';

const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'assets/');
const APP_DIR = path.resolve(__dirname, 'browser/');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'browser.bundle.js'
  }
};

module.exports = config;
