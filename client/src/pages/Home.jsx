import React from 'react';
import pumpkin from '../assets/pumpkin.png';
import pumpkin2 from '../assets/pumpkin2.png';

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen relative">
        <img
          src={pumpkin}
          alt="pumpkin"
          className="w-1/6 h-auto"
          style={{ position: 'absolute', bottom: '0', left: '0', margin: '0px' }}
        />
        <img
          src={pumpkin2}
          alt="pumpkin2"
          className="w-1/6 h-auto"
          style={{ position: 'absolute', bottom: '0', right: '0', margin: '0px' }} 
        />
      </div>
    </>
  );
};
