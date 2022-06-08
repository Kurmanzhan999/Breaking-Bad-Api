import React from 'react';
import spinner from '../assets/spinner.gif';
const Spiner = () => {
  return (
    <img
      src={spinner}
      style={{ width: '200px', margin: 'auto', display: 'block' }}
      alt=""
    />
  );
};

export default Spiner;
