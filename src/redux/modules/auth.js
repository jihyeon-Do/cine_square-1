import { put, call, takeEvery } from 'redux-saga/effects';
// import { createActions, handleActions, createAction } from 'redux-actions';
import TokenService from '../../service/TokenService';
import UserService from '../../service/UserService';
// 서비스 import 자리

const prefix = 'CINESQUARE/AUTH';

// action
const LOGIN_START = `${prefix}/LOGIN_START`;
const LOGIN_SUCCESS = `${prefix}/LOGIN_SUCCESS`;
const LOGIN_FAIL = `${prefix}/LOGIN_FAIL`;

// 2. 액션 생성자 함수 action creator
const loginStart = () => ({
  type: LOGIN_START,
});

const loginSuccess = (token, account, userName) => ({
  type: LOGIN_SUCCESS,
  token,
  // account,
  // userName,
});

const loginFail = (error) => ({
  type: LOGIN_FAIL,
  error,
});

// 3. initial state
const initialState = {
  token: null,
  // account: null,
  // userName: null,
  loading: false,
  error: null,
};

// 4. reducer
export default function reducer(state = initialState, action) {
  const token = action.token;
  // const account = action.account;
  // const userName = action.userName;
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: token,
        // account: account,
        // userName: userName,
        loading: false,
        error: null,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        token: null,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

// 5. saga-action
const START_GET_USER_INFO = 'START_GET_USER_INFO';

// 6. saga-action 생성자 만들기
export const startGetUserInfoActionCreator = (account_id, password) => ({
  type: START_GET_USER_INFO,
  payload: {
    account_id,
    password,
  },
});

// 7. saga-reducer
function* startGetUserInfoSaga(action) {
  // console.log(action);
  try {
    yield put(loginStart());
    const { account_id, password } = action.payload;
    const user = yield call(UserService.getUserInfo, account_id, password);
    console.log(user);
    const { cineToken, account, userName } = user;
    console.log(cineToken, account, userName);
    yield put(loginSuccess(cineToken));
  } catch (error) {
    console.log(error);
    yield put(loginFail(error));
  }
}

// 8. 최종 saga-reducer
export function* getUserInfoSaga() {
  yield takeEvery(START_GET_USER_INFO, startGetUserInfoSaga);
}
