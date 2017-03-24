import React, { PropTypes } from 'react';
import bem from 'bem-cn';

import Box from './Box';
import { getBoxStyles } from './BoxConfiguration';
import { Button, Fa } from '../../elements';
import './BoxDuck.scss';
import duck from './duck.jpg';

const b = bem('component-box-duck');

const BoxDuckHeader = () => (
  <span>This is the box of <strong className={b('duck-text')}>Duck</strong></span>
);

const BoxDuckContent = ({ right, jump, size }) => (
  <div className={b('duck').is({ right, jump })}>
    <img src={duck} style={getBoxStyles(size)} alt="a Duck" />
  </div>
);

const BoxDuckFooter = ({ right, onClick }) => (
  <Button onClick={onClick}>
    Move <strong className={b('duck-text')}>Duck</strong> to
    <span key={right} className={b('direct-text')}> {right ? 'left' : 'right'} </span>
    <Fa name="arrow-right" className={b('arrow').is({ right })()} />
  </Button>
);

function BoxDuck({ right, jump, size, onClick }) {
  return (
    <Box
      header={<BoxDuckHeader />}
      content={<BoxDuckContent right={right} jump={jump} size={size} />}
      footer={<BoxDuckFooter right={right} onClick={onClick} />}
    />
  );
}

BoxDuckContent.propTypes = {
  right: PropTypes.bool.isRequired,
  jump: PropTypes.bool.isRequired,
  size: PropTypes.number.isRequired,
};

BoxDuckFooter.propTypes = {
  right: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

BoxDuck.propTypes = {
  right: PropTypes.bool.isRequired,
  jump: PropTypes.bool.isRequired,
  size: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default BoxDuck;
