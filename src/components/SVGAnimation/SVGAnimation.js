import React from 'react';
import ReactVivus from 'react-vivus';
import svg from '../../assets/img/logo.svg';

const  SVGAnimation = () => (
  <ReactVivus
    id="foo"
    option={{
      file: svg,
      type: 'sync',
      animTimingFunction: 'EASE',
      duration: 130,
      onReady: console.log
    }}
    style={{ height: 'auto', width: '10vw', marginTop: '1vh' }}
  />
);
export default SVGAnimation;