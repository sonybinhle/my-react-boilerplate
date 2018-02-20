import React from 'react';
import { mount } from 'enzyme';

import { Button } from '../../elements';
import BoxDuck from './BoxDuck';

describe('BoxDuck', () => {
  it('should render .is-right and .is-jump classes', () => {
    const wrapper = mount(<BoxDuck right jump size={70} onClick={() => {}} />);

    expect(wrapper.find('i.is-right').length).toBe(1);
    expect(wrapper.find('div.is-right').length).toBe(1);
    expect(wrapper.find('.is-jump').length).toBe(1);
  });

  it('should not render .is-right and .is-jump classes', () => {
    const wrapper = mount(<BoxDuck right={false} jump={false} size={70} onClick={() => {}} />);

    expect(wrapper.find('.is-right').length).toBe(0);
    expect(wrapper.find('.is-jump').length).toBe(0);
  });

  it('should call moveDuck callback', () => {
    const moveDuck = jest.fn();
    const wrapper = mount(<BoxDuck right jump size={70} onClick={moveDuck} />);

    wrapper.find(Button).simulate('click');

    expect(moveDuck).toHaveBeenCalledTimes(1);
  });
});
