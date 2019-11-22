import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUsers } from '@actions';

class UsersListPage extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderList = () => {
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>;
    });
  };

  render() {
    return (
      <div>
        <h1>Big List of Users:</h1>
        <ul>{this.renderList()}</ul>
        <Link className="link" to={'/'}>
          Really, Really boring still, but go back home
        </Link>
        <h1>Well, here's the count from the other page: {this.props.count}</h1>
      </div>
    );
  }
}

const loadData = store => {
  return store.dispatch(fetchUsers());
};

const mapStateToProps = state => ({
  users: state.users,
  count: state.count
});

export default {
  loadData,
  component: connect(mapStateToProps, { fetchUsers })(UsersListPage)
};
