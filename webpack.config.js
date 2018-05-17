const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const SOURCE = /src/;

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json']
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loaders: 'source-map-loader',
        include: [SOURCE]
      },
      {
        test: /\.ts?$/,
        loader: 'awesome-typescript-loader',
        include: [SOURCE]
      },
      { test: /\.js$/, loader: 'babel-loader', include: [SOURCE] },
    ]
  }
};
