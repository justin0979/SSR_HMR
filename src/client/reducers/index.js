import { combineReducers } from 'redux';
import countReducer from '@reducers/countReducer';
import usersReducer from '@reducers/usersReducer';

export default combineReducers({
  count: countReducer,
  users: usersReducer
});
