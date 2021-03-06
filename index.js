import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './src/App.js';
import store from './src/redux/store.js';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
