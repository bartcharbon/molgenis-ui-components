var webpack = require('webpack')
var merge = require('webpack-merge')
var base = require('./webpack.config.base')

var outputFile = 'molgenis-ui-components'
var globalName = 'molgenis-ui-components'

module.exports = merge(base, {
  output: {
    path: './dist',
    filename: outputFile + '.common.js',
    libraryTarget: 'commonjs2',
  },
  target: 'node',
  externals: {
    // Put external libraries like lodash here
    // With their package name
    // Example: 'lodash': 'lodash'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true,
      },
      mangle: false,
    }),
  ],
})