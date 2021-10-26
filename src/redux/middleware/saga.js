import { all } from 'redux-saga/effects';
import { getSearchValueSaga } from '../modules/search';
import { getBoxOfficeListSaga } from '../modules/boxoffice';

export default function* rootSaga() {
  yield all([getSearchValueSaga(), getBoxOfficeListSaga()]);
}
