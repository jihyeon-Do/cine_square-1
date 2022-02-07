import { createStore, applyMiddleware } from 'redux';
import rootReducer from './modules/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import rootSaga from './middleware/saga';
import TokenService from '../service/TokenService';
import AccountService from '../service/AccountService';

export const sagaMiddleware = createSagaMiddleware();

export default function create(history) {
  const store = createStore(
    rootReducer(history),
    {
      auth: {
        token: TokenService.get(),
        account: AccountService.getAccount(),
        userName: AccountService.getUserName(),
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
