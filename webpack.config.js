'use strict';

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
      }
    ]
  }
};
