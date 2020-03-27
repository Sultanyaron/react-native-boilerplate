export const INIT_AUTH = 'INIT_AUTH';
export const INIT_AUTH_SUCCESS = 'INIT_AUTH_SUCCESS';
export const INIT_AUTH_ERROR = 'INIT_AUTH_ERROR';
export const LOGOUT_USER = 'LOGOUT_USER';
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS';

export interface AuthenticationState {
	initAuthFinished: boolean;
	isAuthenticated: boolean;
}

interface InitAuthAction {
	type: typeof INIT_AUTH;
}

interface InitAuthSuccessAction {
	type: typeof INIT_AUTH_SUCCESS;
}

interface InitAuthErrorAction {
	type: typeof INIT_AUTH_ERROR;
}

interface LogoutUserAction {
	type: typeof LOGOUT_USER;
}

interface LogoutUserSuccess {
	type: typeof LOGOUT_USER_SUCCESS;
}

export type InitActionTypes =
	| InitAuthAction
	| InitAuthSuccessAction
	| InitAuthErrorAction
	| LogoutUserAction
	| LogoutUserSuccess;
