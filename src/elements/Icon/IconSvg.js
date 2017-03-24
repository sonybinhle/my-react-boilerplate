import React, { PropTypes } from 'react';
import bem from 'bem-cn';

import icons from './icons.svg';
import './IconSvg.scss';

const b = bem('icon-svg');

const Svg = ({ icon, className, viewBox }) => (
  <svg preserveAspectRatio="xMinYMin meet" viewBox={viewBox} className={b.mix(className)}>
    <use xlinkHref={`${icons}#${icon}`} />
  </svg>
);

Svg.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
  viewBox: PropTypes.string,
};

Svg.defaultProps = {
  className: '',
  viewBox: '0 0 24 24',
};

export default Svg;
