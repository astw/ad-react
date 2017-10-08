const path = require('path');
const webpack = require('webpack');

const config = {
  resolve:{
    modules:[
      path.resolve('./lib'),
      path.resolve('./node_modules')
    ]
  },
  //entry: ['babel-polyfill','./lib/renderers/dom.js'],
  entry:[
    vendor:[
      'babel-polyfill',
      'react',
      'react-dom',
      'prop-types',
      'axios',
      'lodash.debounce',
      'lodash.pickby'
    ],
    app:['.lib/renderers/dom.js']
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude:/node_modeules/,  use: 'babel-loader' }
    ]
  },
  plugins:[
    new webpack.optimize.CommonsChunkPlugin({
      name:'vender',
    })
  ]
};

module.exports = config;
