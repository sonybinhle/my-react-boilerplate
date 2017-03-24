import React from 'react';
import { shallow } from 'enzyme';

import Footer from './index';

describe('A suite', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<Footer />).find('.footer__icon-social').length).toBe(3);
  });
});
