import { shallow } from 'enzyme';
import React from 'react';
import App from '../App.js';

// function setup(){
// 	const wrapper = shallow(<App />);
// 	return wrapper;
// }

describe('Simple tests for App', () => {
	it('Should have h1 tag', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('h1').length).toEqual(1);
	});
	it('Should test snapshoot', () => {
		const wrapper = shallow(<App debug />);
		expect(wrapper).toMatchSnapshot();
	});
});
