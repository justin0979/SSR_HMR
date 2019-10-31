import express from 'express';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';
import { matchRoutes } from 'react-router-config';
import Routes from 'client/Routes';
import renderer from 'helpers/renderer';
import config from '#webpack/webpack.dev-client';
import createStore from 'helpers/createStore';

const app = express();
const compiler = webpack(config);
const isDev = process.env.NODE_ENV === 'development';

if (isDev) {
  app.use(webpackDevMiddleware(compiler, config.devServer));
  app.use(webpackHotMiddleware(compiler));
} else {
  console.log(`
  
  
    THIS IS FOR process.env.NODE_ENV === 'production'
  
  
  `);
}

app.use(express.static('public'));

app.get('*', (req, res, next) => {
  const store = createStore();

  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });

  Promise.all(promises).then(() => {
    res.send(renderer(req, store));
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Server listening on http://localhost:${PORT}`)
);
