import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'antd/dist/antd.css';
import './styles/reset.scss';

import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

import create, { sagaMiddleware } from './redux/create';
import { createBrowserHistory } from 'history';
import rootSaga from './redux/middleware/saga';

const history = createBrowserHistory();
// 초기화시점
export const store = create(history);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
