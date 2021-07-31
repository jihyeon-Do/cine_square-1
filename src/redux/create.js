import { createStore, applyMiddleware } from 'redux';
import rootReducer from './modules/index';
import { composeWithDevTools } from 'redux-devtools-extension';

// const store = createStore(rootReducer);

export default function create() {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware()));
}
