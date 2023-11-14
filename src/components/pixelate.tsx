import React from 'react';
import config from '../../config.json';
import Platypus from '../images/platypus.png';
import Image from 'next/image';

export const Pixelart = () => {
  // console.log(Platypus);
  return (
    <div className="flex flex-row space-x-2">
      <Image src={Platypus} alt="a pixel art platypus" />
    </div>
  );
};

export default Pixelart;
