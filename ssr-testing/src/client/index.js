import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import reducers from '#reducers';
import App from '#client/App';
import '#sass/main';

ReactDOM.hydrate(
  <Provider
    store={createStore(
      reducers,
      window.INITIAL_STATE,
      applyMiddleware(reduxThunk)
    )}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
