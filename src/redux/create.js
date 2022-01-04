import { createStore, applyMiddleware } from 'redux';
import rootReducer from './modules/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import rootSaga from './middleware/saga';
import TokenService from '../service/TokenService';
import UserService from '../service/UserService';
import AccountService from '../service/AccountService';
// const store = createStore(rootReducer);

// export const history = createBrowserHistory();

export const sagaMiddleware = createSagaMiddleware();

export default function create(history) {
  const store = createStore(
    rootReducer(history),
    {
      auth: {
        token: TokenService.get(),
        account: AccountService.get(),
        loading: false,
        error: null,
      },
    },
    composeWithDevTools(
      applyMiddleware(routerMiddleware(history), sagaMiddleware),
    ),
  );
  sagaMiddleware.run(rootSaga);

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
