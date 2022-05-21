import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import App from '../App.js';
import store from '../redux/store.js';

describe('Tests for App', () => {
	test('Should render App component', () => {
		const wrapper = render(
			<Provider store={store}>
				<App />
			</Provider>
		);
		expect(wrapper).toMatchSnapshot();
	});
});

describe('Testing App elements', () => {
	beforeEach(() => {
		render(
			<Provider store={store}>
				<App />
			</Provider>
		);
	});

	test('Should find h1', () => {
		const h1 = screen.getByText(/Hi here! This is Keza-codes back/i);
		expect(h1).toBeInTheDocument();
	});

	test('Should find h1 elements', () => {
		const h1 = screen.getByRole('heading', { level: 1 });
		expect(h1).toBeInTheDocument();
	});

	test('Should find button elements', () => {
		const button = screen.getByRole('button', { name: 'Increment' });
		expect(button).toBeInTheDocument();
	});

	describe('Testing functionalities', () => {
		test('should return initial value as 0', () => {
			const value = screen.getByText(/value: 0/i);
			expect(value).toBeInTheDocument();
		});

		test('should increment on increment button', () => {
			const incrementBtn = screen.getAllByText(/Increment/i)[0];
			fireEvent.click(incrementBtn);
			const value = screen.getByText(/value: 1/i);
			expect(value).toBeInTheDocument();
		});

		test('should decrement on Decrement button after incremented by 1', () => {
			const decrementBtn = screen.getByText(/Decrement/i);
			fireEvent.click(decrementBtn);
			const value = screen.getByText(/value: 0/i);
			expect(value).toBeInTheDocument();
		});

		test('should increment by 10 on Increment by 10 button', () => {
			const incrementBtnBy10 = screen.getByText(/Increment by 10/i);
			fireEvent.click(incrementBtnBy10);
			const value = screen.getByText(/value: 10/i);
			expect(value).toBeInTheDocument();
		});
	});
});
