import React from 'react';
import pumpkin from '../assets/pumpkin.png';
import pumpkin2 from '../assets/pumpkin2.png';
import pumpkin3 from '../assets/pumpkin3.png';
import kodu from '../assets/kodu.png';
import carrot from '../assets/carrot.png';
import tomatoe from '../assets/tomatoes.png';

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen relative">
        <img
          src={kodu}
          alt="kodu"
          className="w-1/6 h-auto"
          style={{ position: 'absolute', bottom: '7%', left: '-7%', margin: '0px' }}
        />
        <img
          src={pumpkin}
          alt="pumpkin"
          className="w-1/6 h-auto"
          style={{ position: 'absolute', bottom: '0', left: '0', margin: '0px' }}
        />
        <img
          src={carrot}
          alt="carrot"
          className="w-1/5 h-auto"
          style={{ position: 'absolute', bottom: '-18%', left: '12%', margin: '0px' }}
        />
        <img
          src={tomatoe}
          alt="tomatoe"
          className="w-1/5 h-auto"
          style={{ position: 'absolute', bottom: '6%', right: '-5%', margin: '0px' }}
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