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
    __API_URL__: JSON.stringify(apiUrl),
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
  entry: `${__dirname}/app/app.js`,
  debug: !production,
  devtool: production ? false : 'eval',
  plugins: plugins,
  output: {
    path: 'public',
    filename: 'bundle.js'
  },
  sassLoader: {
    includePaths: [`${__dirname}/app/scss/lib`]
  },
  postcss: function(){
    return [autoprefixer];
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractText.extract('style', 'css!sass!')
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.(jpg|gif|png|jpeg)$/,
        loader: 'file?name=img/[hash].[ext]'
      }
    ]
  }
};
