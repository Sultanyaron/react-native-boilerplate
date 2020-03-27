import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import rootSaga from './sagas';
import createSagaMiddleware from 'redux-saga';
import authenticationReducer from './authentication/reducers';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
	auth: authenticationReducer
});

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
