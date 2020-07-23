import React from "react";
import { renderToString } from "react-dom/server";
import App from "&components/App";

export default () => {
  const content = renderToString(<App />);

  return `
  <!DOCTYPE html>
  <html lang='en'>
    <head>
      <meta charset='utf-8'>
      <meta name='viewport' content='width=device-width, initial-scale=1'>
      <link rel='stylesheet' href='style.css'>
      <title>SSR from renderer.js</title>
    </head>
    <body>
      <div id='root'>${content}</div>
      <script src='client-bundle.js'></script>
    </body>
  </html>
  `;
};
