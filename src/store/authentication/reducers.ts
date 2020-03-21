import {
	AuthenticationState,
	InitActionTypes,
	INIT_AUTH_SUCCESS,
	INIT_AUTH_ERROR,
	LOGOUT_USER_SUCCESS
} from './types';

const initialState: AuthenticationState = {
	initAuthFinished: false,
	isAuthenticated: false
};

const authenticationReducer = (
	state = initialState,
	action: InitActionTypes
): AuthenticationState => {
	switch (action.type) {
		case INIT_AUTH_SUCCESS:
			return {
				...state,
				initAuthFinished: true,
				isAuthenticated: true
			};

		case INIT_AUTH_ERROR:
			return {
				...state,
				initAuthFinished: true,
				isAuthenticated: false
			};

		case LOGOUT_USER_SUCCESS:
			return {
				...state,
				isAuthenticated: false
			};
		default:
			return state;
	}
};

export default authenticationReducer;
