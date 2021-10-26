import { combineReducers } from 'redux';
import reducer from './reducer';
import search from './search';
import boxoffice from './boxoffice';
import { connectRouter } from 'connected-react-router';

const rootReducer = (history) =>
  combineReducers({
    reducer,
    search,
    boxoffice,
    router: connectRouter(history),
  });

export default rootReducer;
