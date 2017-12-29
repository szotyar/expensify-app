import React from 'react';
import { shallow } from 'enzyme';
import  NotFoundPage  from '../../components/NotFoundPage';

test('I would like it to render NotFoundPage component', () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
});