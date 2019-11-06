const webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    },
    modules: ['src', 'src/client', 'src/server', 'node_modules'],
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
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
};
