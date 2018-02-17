import React from 'react';
import bem from 'bem-cn';

import './header.scss';

const b = bem('header');

export default () => (
  <header className={b.mix('row')()}>
    <div className="columns">Welcome</div>
  </header>
);
