import React from 'react';
import { shallow } from 'enzyme';

import A from './';

describe('Element A', () => {
  it('Render Element A with target blank', () => {
    const wrapper = shallow(<A href="/" newTab>A Link</A>);

    expect(wrapper.props().target).toBe('_blank');
  });

  it('Render Element A with target self', () => {
    const wrapper = shallow(<A href="/">A Link</A>);

    expect(wrapper.props().target).toBe('_self');
  });
});
