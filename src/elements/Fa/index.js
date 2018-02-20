import React from 'react'; import PropTypes from 'prop-types';

const Fa = ({ name, className }) => (
  <i className={`fa fa-${name} ${className}`} aria-hidden="true" />
);

Fa.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Fa.defaultProps = {
  className: '',
};

export default Fa;
