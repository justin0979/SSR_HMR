import { combineReducers } from 'redux';
import usersReducer from '#reducers/usersReducer';
import countReducer from '#reducers/countReducer';

export default combineReducers({
  users: usersReducer,
  count: countReducer
});
