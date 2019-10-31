const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.dev-base');
const nodeExternals = require('webpack-node-externals');

module.exports = merge(baseConfig, {
  name: 'server',
  target: 'node',
  entry: './src/server/server.js',
  output: {
    filename: 'server-bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  externals: nodeExternals()
});
