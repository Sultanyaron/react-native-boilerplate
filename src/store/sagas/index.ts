import { all } from 'redux-saga/effects';
import { watchAuthSaga } from './authSaga';

export default function* rootSaga() {
	yield all([watchAuthSaga()]);
}
