import React from 'react';
import { shallow, mount } from 'enzyme';

import BoxConfiguration from './BoxConfiguration';

describe('BoxDuck', () => {
  it('should render .component-box-configuration__box class', () => {
    const wrapper = shallow(<BoxConfiguration activeSize={70} setSize={() => {}} />);

    expect(wrapper.find('.component-box-configuration__box').length).toBe(1);
  });

  it('should render three buttons with class component-box-configuration__square', () => {
    const wrapper = mount(<BoxConfiguration activeSize={70} setSize={() => {}} />);

    expect(wrapper.find('button.component-box-configuration__square').length).toBe(3);
  });

  it('should call setSize callback', () => {
    const setSize = jest.fn();
    const wrapper = mount(<BoxConfiguration activeSize={70} setSize={setSize} />);

    wrapper.find('button').first().simulate('click');

    expect(setSize).toHaveBeenCalledTimes(1);
    expect(setSize).toBeCalledWith(30);
  });
});
