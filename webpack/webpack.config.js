const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.dev-base');

module.exports = {
  entry: './src/client/webpackdevserverentry.js',
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'bundle.js',
    publicPath: ''
  },
  mode: 'development',
  devServer: {
    contentBase: 'build',
    port: 3001,
    overlay: true,
    historyApiFallback: true
  },
  resolve: {
    modules: [
      'src',
      'src/client',
      'src/client/components',
      'src/client/images',
      'src/client/actions',
      'src/client/reducers',
      'node_modules'
    ],
    extensions: [
      '.js',
      '.jsx',
      '.css',
      '.scss',
      '.jpg',
      '.jpeg',
      '.png',
      '.gif',
      '.svg',
      '.json'
    ]
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: '[path][name].[ext]' }
          },
          'image-webpack-loader'
        ]
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/template.html'
    })
  ]
};
