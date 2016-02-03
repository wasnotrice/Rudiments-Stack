import path from 'path'
import webpack from 'webpack'
const themeDir = path.resolve(__pkg._themepath)
const args = global.__args

export default {
  context: path.resolve(themeDir, 'scripts'),

  entry: {
    scripts: './compose',
    polyfills: ['./vendors/modernizr', 'flexibility']
  },

  output: {
    path: path.resolve(themeDir, 'assets', 'js'),
    filename: '[name].js'
  },

  externals: {
    'jquery': 'jQuery',
    'lodash': '_',
    'underscore': '_',
    'backbone': 'Backbone'
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel'
    }]
  }
}