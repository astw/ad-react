const path = require('path');

const config = {
  resolve:{
    modules:[
      path.resolve('./lib'),
      path.resolve('./node_modeules')
    ]
  },
  entry: ['babel-polyfill','./lib/renderers/dom.js'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude:/node_modeules/,  use: 'babel-loader' }
    ]
  }
};

module.exports = config;
