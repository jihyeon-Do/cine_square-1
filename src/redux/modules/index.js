import { combineReducers } from 'redux';
import reducer from './reducer';
import search from './search';
import { connectRouter } from 'connected-react-router';

const rootReducer = (history) =>
  combineReducers({
    reducer,
    search,
    router: connectRouter(history),
  });

export default rootReducer;
