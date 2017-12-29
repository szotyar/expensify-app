import { shallow } from 'enzyme';
import React from 'react';
import Header from '../../components/Header';
import toJson from 'enzyme-to-json';

test('I would like it to render header correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
    //expect(wrapper.find('h1').text()).toBe('Expensify');
});