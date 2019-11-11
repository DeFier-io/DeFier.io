import React from 'react';
import ReactVivus from 'react-vivus';
import svg from './img.svg';

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
    callback={console.log}
  />
);
export default SVGAnimation;