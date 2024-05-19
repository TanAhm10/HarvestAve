import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Header() {
  return (
    <header className='fixed top-0 left-0 w-full z-10'>
      <div className='max-w-6xl mx-auto p-3 flex justify-end items-center'>
        <Link to='/' className='absolute left-0 pl-3'>
          <img src={logo} alt='Logo' className='h-14 w-20' />
        </Link>
        <ul className='flex gap-12 font-space-grotesk'>
          <Link to='/'>
            <li className='text-black cursor-pointer hover:text-orange-500'>Home</li>
          </Link>
          <Link to='/about'>
            <li className='text-black cursor-pointer hover:text-orange-500'>About</li>
          </Link>
          <Link to='/submissions'>
            <li className='text-black cursor-pointer hover:text-orange-500'>Submissions</li>
          </Link>
          <Link to='/sign-in'>
            <li className='text-black cursor-pointer hover:text-orange-500'>Sign In</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};
