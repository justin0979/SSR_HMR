import express from 'express';
import { matchRoutes } from 'react-router-config';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '#config/webpack.dev-client';
import Routes from '#client/Routes';
import createStore from '#helpers/createStore';
import renderer from '#helpers/renderer';

const app = express();
const PORT = process.env.PORT || 3000;
const compiler = webpack(config);

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  })
);
app.use(webpackHotMiddleware(compiler));
app.use(express.static('public'));

app.get('*', (req, res, next) => {
  const store = createStore();

  const promises = matchRoutes(Routes, req.path).map(({ route }) =>
    route.loadData ? route.loadData(store) : null
  );

  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, store, context);

    res.send(content);
  });
});

app.listen(PORT, () => `Server listening on port ${PORT}`);
