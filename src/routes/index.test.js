import React from 'react';
import { shallow } from 'enzyme';
import { Route } from 'react-router-dom';

import '../tests/mock/config';
import Routes from './';

describe('Routes', () => {
  it('Render Routes without error', () => {
    const wrapper = shallow(<Routes />);

    expect(wrapper.find(Route).length).toBe(2);
  });
});
