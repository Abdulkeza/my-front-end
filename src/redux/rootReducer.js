import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './reducers/counter.js';

const allReducers = combineReducers({
	counter: counterReducer,
});

export default allReducers;
