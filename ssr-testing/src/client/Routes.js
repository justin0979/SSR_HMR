import Home from 'components/Home';
import UsersList from 'components/UsersList';

export default [
  {
    path: '/',
    ...Home,
    exact: true
  },
  {
    path: '/users',
    ...UsersList
  }
];
