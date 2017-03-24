/* eslint-disable import/no-extraneous-dependencies */
import { shallow, mount } from 'enzyme';
import { Link } from 'react-router-dom';

const context = {
  router: {
    isActive: () => true,
    history: {
      push: () => {},
      replace: () => {},
      createHref: () => {},
    },
  },
};

const childContextTypes = Link.contextTypes;

export const shallowWithRouter = component => shallow(component, { context });

export const mountWithRouter = component => mount(component, { context, childContextTypes });
