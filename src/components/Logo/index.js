import React from 'react';
import { Link } from 'react-router-dom';
import bem from 'bem-cn';

import { IconSvg } from '../../elements';
import './styles.scss';

const b = bem('logo');

export default () => (
  <div>
    <Link className={b('a').mix('flex-container align-middle')()} href="/" to="/">
      <span className={b('icon')()} >
        <IconSvg icon="logo" viewBox="0 0 1000 1000" />
      </span>
      Xeasony
    </Link>
  </div>
);
