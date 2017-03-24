import React, { PropTypes } from 'react';
import bem from 'bem-cn';

import IconSvg from './IconSvg';
import './IconSocial.scss';

const b = bem('icon-social');

const IconSocial = ({ icon }) => (
  <span className={b()} >
    <IconSvg icon={icon} />
  </span>
);

IconSocial.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default IconSocial;
