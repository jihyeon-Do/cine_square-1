import { put, call, takeEvery } from 'redux-saga/effects';

// 루트사가에 추가, 리덕스 스토어에 사가 추가

// 1. 액션 start, success, error 3가지
const prefix = 'CINESQUARE/SEARCH';

const GET_SEARCHVALUE_START = `${prefix}/GET_SEARCHVALUE_START`;
const GET_SEARCHVALUE_SUCCESS = `${prefix}/GET_SEARCHVALUE_SUCCESS`;
const GET_SEARCHVALUE_FAIL = `${prefix}/GET_SEARCHVALUE_FAIL`;

// action creator
const getSearchValueStart = () => ({
  type: GET_SEARCHVALUE_START,
});

const getSearchValueSuccess = (value) => ({
  type: GET_SEARCHVALUE_SUCCESS,
  value,
});

const getSearchValueFail = (error) => ({
  type: GET_SEARCHVALUE_FAIL,
  error,
});

// initial state
const initialState = {
  value: '',
  loading: false,
  error: null,
};

// reducer
export default function reducer(state = initialState, action) {
  const value = action.value;
  switch (action.type) {
    case GET_SEARCHVALUE_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_SEARCHVALUE_SUCCESS:
      return {
        ...state,
        value: value,
        loading: false,
        error: null,
      };
    case GET_SEARCHVALUE_FAIL:
      return {
        ...state,
        value: '',
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

// saga-action
const START_GET_SEARCH_VALUE = 'START_GET_SEARCH_VALUE';
// const SUCCESS_GET_SEARCH_VALUE = `${prefix}/SUCCESS_GET_SEARCH_VALUE`;
// const FAIL_GET_SEARCH_VALUE = `${prefix}/FAIL_GET_SEARCH_VALUE`;

export const startGetSearchValueActionCreator = (value) => ({
  type: START_GET_SEARCH_VALUE,
  payload: {
    value,
  },
});

// saga-reducer
function* startGetSearchValueSaga(action) {
  yield put(getSearchValueStart());
  console.log(action);
  try {
    const { value } = action.payload;
    yield put(getSearchValueSuccess(value));
  } catch (error) {
    console.log(error);
    yield put(getSearchValueFail(error));
  }
}

export function* getSearchValueSaga() {
  yield takeEvery(START_GET_SEARCH_VALUE, startGetSearchValueSaga);
}
