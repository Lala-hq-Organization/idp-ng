import React from 'react';
import MoonLoader from 'react-spinners/MoonLoader';

const style = {
  position: 'fixed',
  top: '50%',
  left: ' 50%',
  transform: 'translate(-50%, -50%)'
};

export default function Loading() {
  return (
    <div style={style}>
      <MoonLoader size={30} />
    </div>
  );
}
