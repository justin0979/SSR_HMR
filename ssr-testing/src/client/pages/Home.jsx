import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { increment, decrement } from '#actions';

class Home extends React.Component {
  render() {
    const { increment, decrement } = this.props;
    return (
      <div className="home">
        <Link to={'/users'}>UsersList Page</Link>
        <button onClick={() => increment(this.props.count)}>increase</button>
        <button onClick={() => decrement(this.props.count)}>decrement</button>
        <h1>{this.props.count}</h1>
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
  )(Home)
};
