import React from 'react';
import { connect } from 'react-redux';
import cabin2 from 'images/cabin-2';
import { increment, decrement } from 'actions';

class App extends React.Component {
  render() {
    const { count } = this.props;

    return (
      <div className="app">
        <div className="story">
          <figure className="story__pic">
            <img src={cabin2} alt="cabin2" />
          </figure>
          <div className="story__text">
            <h1>Cabin 2</h1>
            <p>
              Caleb enjoyed visiting Cabin 2 for the second year in a row.
              During his stays, he was lucky enough to have been visited by
              different types of animals. His favorite (at least I think), were
              probably the kittens.
            </p>
            <p>I'd like this to work</p>
            <p>Failed when saving this file</p>
          </div>
        </div>
        <div className="count">
          <div className="buttons">
            <button
              className="btn btn--increment"
              onClick={() => this.props.increment(count)}
            >
              increment
            </button>
            <button
              className="btn btn--decrement"
              onClick={() => this.props.decrement(count)}
            >
              decrement
            </button>
          </div>
          <h1>{this.props.count}</h1>
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
  )(App)
};
