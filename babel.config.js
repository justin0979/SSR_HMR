module.exports = {
  presets: [
    [
      "@babel/env",
      { useBuiltIns: "usage", corejs: { version: 3, proposal: true } },
    ],
    "@babel/react",
  ],
  plugins: [
    "@babel/transform-runtime",
    "@babel/proposal-class-properties",
    "react-hot-loader/babel",
    [
      "module-resolver",
      {
        alias: {
          "&config": "./config",
          "#src": "./src",
          "&client": "./src/client",
          "&actions": "./src/client/actions",
          "&components": "./src/client/components",
          "&images": "./src/client/images",
          "&reducers": "./src/client/reducers",
          "&sass": "./src/client/sass",
          "#server": "./server",
          "&helpers": "./server/helpers",
        },
      },
    ],
  ],
};
