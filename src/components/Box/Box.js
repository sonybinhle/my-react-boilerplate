import React from 'react';
import PropTypes from 'prop-types';
import bem from 'bem-cn';

import './Box.scss';

const b = bem('component-box');

function Box({
  className, header, content, footer,
}) {
  return (
    <div className={b.mix(className)()}>
      {header && <div className={b('header')}>{header}</div>}
      {content && <div className={b('content')}>{content}</div>}
      {footer && <div className={b('footer')}>{footer}</div>}
    </div>
  );
}

Box.propTypes = {
  className: PropTypes.string,
  header: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  footer: PropTypes.node,
};

Box.defaultProps = {
  className: '',
  footer: null,
};

export default Box;
