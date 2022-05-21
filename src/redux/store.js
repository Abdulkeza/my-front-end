import { configureStore } from '@reduxjs/toolkit';
import allReducers from './rootReducer.js';

export default configureStore({
	reducer: {
		allReducers,
	},
});
