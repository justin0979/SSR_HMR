import HomePage from '@components/HomePage';
import UsersListPage from '@components/UsersListPage';

export default [
  {
    path: '/',
    ...HomePage,
    exact: true
  },
  {
    path: '/users',
    ...UsersListPage
  }
];
