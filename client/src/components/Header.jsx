import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md relative'>
      <div className='max-w-6xl mx-auto p-3 flex justify-end items-center'>
        <Link to='/' className='absolute left-0 pl-3'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-green-500'>Harvest</span>
            <span className='text-red-700'>Ave</span>
          </h1>
        </Link>
        <ul className='flex gap-5'>
          <Link to='/'>
            <li className='text-orange-400 cursor-pointer transform transition duration-300 ease-in-out hover:rotate-12'>Home</li>
          </Link>
          <Link to='/about'>
            <li className='text-orange-400 hover:underline cursor-pointer'>About</li>
          </Link>
          <Link to='/sign-in'>
            <li className='text-orange-400 hover:underline cursor-pointer'>Sign In</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
