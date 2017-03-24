import React from 'react';
import { Link } from 'react-router-dom';
import bem from 'bem-cn';

import { IconSvg } from '../../elements';
import './styles.scss';

const b = bem('logo');

export default () => (
  <div>
    <Link className={b('a').mix('flex-container align-middle')()} to="/">
      <IconSvg icon="logo" className={b('icon')()} viewBox="0 0 32 32" />
      Xeasony
    </Link>
  </div>
);
