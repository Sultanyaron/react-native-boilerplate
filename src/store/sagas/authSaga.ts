import { put, all, takeLatest } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import { initAuthSuccess, initAuthError } from '../authentication/actions';
import { INIT_AUTH } from '../authentication/types';

function* initAuth() {
	try {
		const token = yield AsyncStorage.getItem('token');
		if (token) {
			yield put(initAuthSuccess());
			return;
		}
		yield put(initAuthError());
	} catch (error) {
		yield put(initAuthError());
	}
}

export function* watchAuthSaga() {
	yield all([takeLatest(INIT_AUTH, initAuth)]);
}
