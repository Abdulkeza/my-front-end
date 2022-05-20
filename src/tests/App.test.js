import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../App.js';

describe('Tests for App', () => {
	it('Should have h1 tag', () => {
		render(<App />);
		const heading = screen.getByText(/Hello world! I am using React/i);
		expect(heading).toBeInTheDocument();
	});
});
