'use strict';
const webpack = require('webpack');
const CleanPlugin = require('clean-webpack-plugin');

const autoprefixer = require('autoprefixer');
const ExtractText = require('extract-text-webpack-plugin');

const production = process.env.NODE_ENV === 'production';
const apiUrl = process.env.API_URL || 'http://localhost:3000';

var plugins = [
  new ExtractText('bundle.css'),
  new webpack.DefinePlugin({
    __API_URL__: JSON.stringify(apiURL),
    __DEBUG__: JSON.stringify(!production)
  })
];

if (production){
  plugins = plugins.concat([
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      compress: {
        warnings: false
      }
    }),
    new CleanPlugin()
  ]);
}

module.exports = {
  entry: './app/app.js',
  output: {
    path: 'build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\scss$/,
        loader: 'style!css!sass!'
      },
      {
         test: /\.html$/,
         loader: 'html'
      },
      {
        test: /\.(jpg|gif|png|jpeg)$/,
        loader: 'file?name=img/[hash].[ext]'
      },
    ]
  }
};
