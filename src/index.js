import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

const rootEl = document.getElementById('root');

const render = (AppComponent) => {
  try {
    ReactDOM.render(<AppComponent />, rootEl);
  } catch (e) {
    if (module.hot) {
      const RedBox = require('redbox-react').default; // eslint-disable-line

      ReactDOM.render(<RedBox error={e} />, rootEl);

      console.error(e); // eslint-disable-line
    } else {
      throw e;
    }
  }
};

render(App);

if (module.hot) {
  module.hot.accept('./app', () => {
    render(App);
  });
}
