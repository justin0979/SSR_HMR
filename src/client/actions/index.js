import axios from 'axios';
import { FETCH_USERS, INCREMENT, DECREMENT } from 'actions/types';

export const fetchUsers = () => async dispatch => {
  const res = await axios.get('http://react-ssr-api.herokuapp.com/users');

  dispatch({
    type: FETCH_USERS,
    payload: res
  });
};

export const increment = count => {
  return {
    type: INCREMENT,
    payload: count + 1
  };
};

export const decrement = count => ({
  type: DECREMENT,
  payload: count - 1
});
