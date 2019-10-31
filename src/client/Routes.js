import App from 'components/App';
import UsersList from 'components/UsersList';

export default [
  {
    path: '/',
    ...App,
    exact: true
  },
  {
    path: '/users',
    ...UsersList
  }
];
