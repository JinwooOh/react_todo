const webpack = require('webpack');
const path = require('path');
const config = {
  entry: path.resolve('src/index.js'),
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
//load multiple loaders
  module: {
    rules: [
      {
        test: /.js$/,
        loader: 'babel-loader'
      },{
        test: /\.css$/,
        loader: 'style-loader'
      },{
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      }
    ]
  },

  devServer: {
    contentBase: path.join(__dirname, ""),
    compress: true,
    port: 9000
  }


};

module.exports = config;
