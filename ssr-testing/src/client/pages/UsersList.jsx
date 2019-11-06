import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUsers } from '#actions';

class UsersList extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers = () =>
    this.props.users.map(user => <li key={user.id}>{user.name}</li>);

  render() {
    return (
      <div className="home">
        <Link to={'/'}>Go Home</Link>
        <h1>Users:</h1>
        <ul>{this.renderUsers()}</ul>
        <h1>{this.props.count}</h1>
      </div>
    );
  }
}

const loadData = store => store.dispatch(fetchUsers());

const mapStateToProps = state => {
  return {
    users: state.users,
    count: state.count
  };
};

export default {
  loadData,
  component: connect(
    mapStateToProps,
    { fetchUsers }
  )(UsersList)
};
