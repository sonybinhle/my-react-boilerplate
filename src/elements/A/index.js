import React, { PropTypes } from 'react';
import bem from 'bem-cn';

import './styles.scss';

const b = bem('a');

const A = ({ children, className, newTab, ...props }) => (
  <a
    className={b.mix(className)}
    target={newTab ? '_blank' : '_self'}
    {...props}
  >
    {children}
  </a>
);

A.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  newTab: PropTypes.bool,
};

A.defaultProps = {
  className: '',
  newTab: false,
};

export default A;
