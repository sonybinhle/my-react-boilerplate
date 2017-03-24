import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';

import Logo from './';

describe('Logo', () => {
  it('Should render Logo without error', () => {
    const wrapper = shallow(<Logo />);

    expect(wrapper.find(Link).length).toBe(1);
  });
});
