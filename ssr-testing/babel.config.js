module.exports = {
  presets: [
    [
      '@babel/env',
      {
        useBuiltIns: 'entry',
        corejs: { version: 3, proposal: true }
      }
    ],
    '@babel/react'
  ],
  plugins: [
    'react-hot-loader/babel',
    '@babel/transform-runtime',
    '@babel/proposal-class-properties',
    [
      'module-resolver',
      {
        alias: {
          '#config': './config',
          '#src': './src',
          '#client': './src/client',
          '#test': './src/client/__tests__',
          '#actions': './src/client/actions',
          '#components': './src/client/components',
          '#pages': './src/client/pages',
          '#reducers': './src/client/reducers',
          '#sass': './src/client/sass',
          '#server': './src/server',
          '#helpers': './src/server/helpers'
        }
      }
    ]
  ]
};
