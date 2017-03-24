import React, { PropTypes } from 'react';
import bem from 'bem-cn';

import './styles.scss';

const b = bem('button');

const Button = ({ children, className, ...props }) => (
  <button className={b.mix(className)} {...props}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: '',
};

export default Button;
