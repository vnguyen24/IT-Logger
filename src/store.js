// import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = configureStore({
	reducer: rootReducer,
	middleware: middleware,
	devTools: true,
	preloadedState: initialState,
});

export default store;
