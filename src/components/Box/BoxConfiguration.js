import React, { PropTypes } from 'react';
import bem from 'bem-cn';

import Box from './Box';
import './BoxConfiguration.scss';

const b = bem('component-box-configuration');

export const SIZES = {
  s: 30,
  m: 50,
  l: 70,
};

export function getBoxStyles(size) {
  return {
    width: size,
    height: size,
  };
}

const Square = ({ sizeType, activeSize, setSize }) => (
  <button
    className={b('square')({ size: sizeType }).is({ active: SIZES[sizeType] === activeSize })}
    style={getBoxStyles(SIZES[sizeType])}
    onClick={() => setSize(SIZES[sizeType])}
  />
);

const BoxHeader = () => (
  <span>Duck <strong className={b('configuration-text')}>Configuration</strong></span>
);

const BoxContent = ({ activeSize, setSize }) => (
  <div className={b('squares')} >
    {
      Object.keys(SIZES).map(sizeType =>
        <Square key={sizeType} sizeType={sizeType} setSize={setSize} activeSize={activeSize} />)
    }
  </div>
);

function BoxConfiguration({ activeSize, setSize }) {
  return (
    <Box
      className={b('box')()}
      header={<BoxHeader />}
      content={<BoxContent activeSize={activeSize} setSize={setSize} />}
    />
  );
}

Square.propTypes = {
  sizeType: PropTypes.string.isRequired,
  activeSize: PropTypes.number.isRequired,
  setSize: PropTypes.func.isRequired,
};

BoxContent.propTypes = {
  activeSize: PropTypes.number.isRequired,
  setSize: PropTypes.func.isRequired,
};

BoxConfiguration.propTypes = BoxContent.propTypes;

export default BoxConfiguration;
