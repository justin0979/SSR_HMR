import React from 'react';

class HomePage extends React.Component {
  state = { counter: 0 };

  render() {
    return (
      <div className="app">
        <h1>Counter Example</h1>
      </div>
    );
  }
}

export default {
  component: HomePage
};
