import { combineReducers } from 'redux';
import reducer from './reducer';
import { connectRouter } from 'connected-react-router';

const rootReducer = (history) =>
  combineReducers({
    reducer,
    router: connectRouter(history),
  });

export default rootReducer;
