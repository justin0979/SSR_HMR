const path = require('path');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.dev-base');

module.exports = merge(baseConfig, {
  name: 'server',
  target: 'node',
  mode: 'production',
  entry: './src/server',
  output: {
    filename: 'server-bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  externals: nodeExternals()
});
