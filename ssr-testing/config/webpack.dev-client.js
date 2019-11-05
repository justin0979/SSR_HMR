const path = require('path');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const baseConfig = require('./webpack.dev-base');

module.exports = merge(baseConfig, {
  name: 'client',
  target: 'web',
  mode: 'development',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?reload=true',
    './src/client'
  ],
  output: {
    filename: 'client-bundle.js',
    path: path.resolve(__dirname, '../public')
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { hmr: process.env.NODE_ENV === 'development' }
          },
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ]
});
