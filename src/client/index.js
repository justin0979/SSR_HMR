import React from 'react';
import ReactDOM from 'react-dom';
import App from '@components/App';
import '@sass/main';

ReactDOM.hydrate(<App />, document.querySelector('#root'));
