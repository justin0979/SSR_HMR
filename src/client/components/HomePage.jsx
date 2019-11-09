import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '@actions';

export class HomePage extends React.Component {
  state = { counter: 0, negative: false };

  decrementCounter = () => {
    if (this.state.counter > 0) {
      this.setState({ counter: this.state.counter - 1 });
    } else if (this.state.counter <= 0) {
      this.setState({ negative: true });
    }
  };

  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1, negative: false });
  };

  renderOutput = () => {
    if (!this.state.negative) {
      return (
        <h1>
          Counter: {this.state.counter}
          <br />
          <span>Stay Positive</span>
        </h1>
      );
    } else {
      return (
        <h1>
          Counter: {this.state.counter}
          <br />
          <span data-text="error-message">Cannot go below zero</span>
        </h1>
      );
    }
  };

  render() {
    return (
      <div className="appCounter" data-test="homepage-component">
        <h1>Counter Example</h1>
        <div>
          <button
            className="btn"
            onClick={() => this.incrementCounter()}
            data-test="increment-button"
          >
            Increment
          </button>
          <button
            className="btn"
            onClick={() => this.decrementCounter()}
            data-test="decrement-button"
          >
            Decrement
          </button>
        </div>
        <div className="countDisplay" data-test="display-counter">
          {this.renderOutput()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.count
});

export default {
  component: connect(
    mapStateToProps,
    { increment, decrement }
  )(HomePage)
};
