import { createStore, applyMiddleware } from 'redux';
import rootReducer from './modules/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
// const store = createStore(rootReducer);

// export const history = createBrowserHistory();

export const sagaMiddleware = createSagaMiddleware();

export default function create(history) {
  const store = createStore(
    rootReducer(history),
    composeWithDevTools(
      applyMiddleware(routerMiddleware(history), sagaMiddleware),
    ),
  );
  return store;
}

// export default function create() {
//   return createStore(
//     rootReducer,
//     {
//       auth: {
//         token: TokenService.get(),
//         loading: false,
//         error: null,
//       },
//     },
//     composeWithDevTools(applyMiddleware()),
//   );
// }
