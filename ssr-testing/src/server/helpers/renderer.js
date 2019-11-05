import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import serialize from 'serialize-javascript';
import App from 'client/App';

export default (req, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );

  return `
  <!DOCTYPE html>
  <html lang='en'>
    <head>
      <meta charset='utf-8'>
      <meta name='viewport' content='width=device-width, initial-scale=1'>
      <link rel='stylesheet' href='style.css'>
      <title>Testing HMR SSR</title>
    </head>
    <body>
      <div id='root'>${content}</div>
      <script>window.INITIAL_STATE = ${serialize(store.getState())}</script>
      <script src='client-bundle.js'></script>
    </body>
  </html>
  `;
};
