import { hot } from 'react-hot-loader/root';
import React from 'react';

const renderThis = () => {
  return 'what now';
};
const App = () => {
  return (
    <div className="app">
      <h1>App</h1>
    </div>
  );
};

export default hot(App);
