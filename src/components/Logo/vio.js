import React from 'react';
import { Link } from 'react-router-dom';
import bem from 'bem-cn';

import { IconSvg } from '../../elements';
import './styles.scss';

const b = bem('logo');

console.log('sdfsdf');

export default () => (
  <div>
    <Link className={b('a').mix('flex-container align-middle')()} to="/">
      <span className={b('icon')()} >
        <IconSvg icon="logo" viewBox="0 0 1000 1000" />
      </span>
      He He d
    </Link>
  </div>
);
