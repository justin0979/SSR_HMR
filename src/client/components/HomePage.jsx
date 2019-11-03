import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import field1 from 'images/field-1';
import { increment, decrement } from 'actions';

class HomePage extends React.Component {
  render() {
    const { count } = this.props;

    return (
      <div className="app">
        <div className="story">
          <figure className="story__pic">
            <img src={field1} alt="field1" />
          </figure>
          <figure className="story__pic2">
            <img src={field1} alt="field1" />
          </figure>
          <div className="story__text">
            <h1>Field Pic</h1>
            <p>
              I made sure that the hot module replacement code had been properly
              used. So far, everything is updating as expected. Now, I am going
              to take some time to finish some CSS courses and continue to check
              out how to have HMR implemented so that mini-css-extract-plugin
              can be used; that way, when I turn off javascript on the browser,
              all CSS is still applied.
            </p>
            <p className="update">
              UPDATE: external css files now work; nodemon use still being
              worked on
            </p>
          </div>
        </div>
        <Link className="link" to={'/users'}>
          Check out the users page
        </Link>
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
          <h1 className="count__value">{this.props.count}</h1>
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
