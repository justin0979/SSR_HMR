import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "&reducers";

export default () => {
  return createStore(reducers, {}, applyMiddleware(reduxThunk));
};
