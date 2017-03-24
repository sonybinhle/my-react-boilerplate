import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Header from './index';

describe('A suite', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<Header />).contains(<div className="columns">Welcome</div>)).toBe(true);
  });

  it('should be selectable by class "app"', () => {
    expect(shallow(<Header />).is('.header')).toBe(true);
  });

  it('should mount in a full DOM', () => {
    expect(mount(<Header />).find('.header').length).toBe(1);
  });

  it('should render to static HTML', () => {
    expect(render(<Header />).text()).toEqual('Welcome');
  });
});
