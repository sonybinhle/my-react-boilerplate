import React from 'react';
import { shallow } from 'enzyme';

import { mountWithRouter } from '../../tests';
import Home from './';
import { BoxDuck, BoxConfiguration } from '../../components';

describe('Page Home', () => {
  it('Render Page Home without error', () => {
    const wrapper = shallow(<Home />);

    expect(wrapper.find(BoxDuck).length).toBe(1);
    expect(wrapper.find(BoxConfiguration).length).toBe(1);
  });

  test('set state right to true after componentDidMount', () => {
    jest.useFakeTimers();

    const wrapper = mountWithRouter(<Home />);

    expect(wrapper.state().right).toBe(false);

    jest.runAllTimers();

    expect(wrapper.state().right).toBe(true);
  });

  test('calls moveDuck change state right, jump', () => {
    jest.useFakeTimers();

    const wrapper = mountWithRouter(<Home />);

    jest.runAllTimers();

    wrapper.find(BoxDuck).props().onClick();

    expect(wrapper.state()).toEqual({ right: false, jump: true, size: 50 });

    jest.runAllTimers();

    expect(wrapper.state()).toEqual({ right: false, jump: false, size: 50 });
  });

  test('should change duck size', () => {
    jest.useFakeTimers();

    const wrapper = mountWithRouter(<Home />);

    jest.runAllTimers();

    wrapper.instance().setDuckSize(100);

    expect(wrapper.state()).toEqual({ right: true, jump: false, size: 100 });
  });
});
