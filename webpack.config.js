/* global __dirname*/
const path = require('path');
const webpack = require('webpack');
const fs = require('fs');

// const CleanWebpackPlugin = require('clean-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env={}) => { // https://webpack.js.org/guides/environment-variables/
  const hotOrNot = env.hot ? true : false;
  return {
    entry: './scripts/index.js',
    output: {
      filename: 'js/index.bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname),
      hot: hotOrNot
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader'
          ]
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        // simple strings to define here, such as API keys
      }),
      //more info on shimming global variables @ https://webpack.js.org/guides/shimming/#shimming-globals
      new webpack.ProvidePlugin({
        /* global name : module name */
        L: 'leaflet'
      })
      hotOrNot && new webpack.HotModuleReplacementPlugin()
      /* +++ your plugins here +++ */
    ].filter(plugin => plugin ? true : false),
  };
};
