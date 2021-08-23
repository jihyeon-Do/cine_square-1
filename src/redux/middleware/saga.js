import { all } from 'redux-saga/effects';
import { getSearchValueSaga } from '../modules/search';

export default function* rootSaga() {
  yield all([getSearchValueSaga()]);
}
