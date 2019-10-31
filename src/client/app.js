import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import reducers from 'reducers';
import Routes from 'client/Routes';
import 'sass/main';

ReactDOM.render(
  <Provider
    store={createStore(
      reducers,
      window.__INITIAL_STATE__,
      applyMiddleware(reduxThunk)
    )}
  >
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
