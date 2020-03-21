import {
	INIT_AUTH,
	INIT_AUTH_SUCCESS,
	INIT_AUTH_ERROR,
	LOGOUT_USER,
	LOGOUT_USER_SUCCESS
} from './types';

export const initAuth = () => ({ type: INIT_AUTH });
export const initAuthSuccess = () => ({ type: INIT_AUTH_SUCCESS });
export const initAuthError = () => ({ type: INIT_AUTH_ERROR });

export const logoutUser = () => ({ type: LOGOUT_USER });
export const logoutUserSuccess = () => ({ type: LOGOUT_USER_SUCCESS });
