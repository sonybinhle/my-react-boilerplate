import React from 'react';
import { shallow } from 'enzyme';

import NotFound from './';

describe('Page NotFound', () => {
  it('Render Page NotFound without error', () => {
    const wrapper = shallow(<NotFound />);

    expect(wrapper.find('.pages-not-found__error-status').length).toBe(1);
  });
});
