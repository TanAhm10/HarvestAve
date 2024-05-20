import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import logo from '../assets/logo.png';

const NavLinks = ({ isMobile = false }) => (
  <ul className={`flex ${isMobile ? 'flex-col gap-6 items-center' : 'gap-12'} font-space-grotesk`}>
    <li>
      <Link to="/" className="text-black cursor-pointer hover:text-orange-500">Home</Link>
    </li>
    <li>
      <Link to="/about" className="text-black cursor-pointer hover:text-orange-500">About</Link>
    </li>
    <li>
      <Link to="/submissions" className="text-black cursor-pointer hover:text-orange-500">Submissions</Link>
    </li>
    <li>
      <Link to="/sign-in" className="text-black cursor-pointer hover:text-orange-500">Sign In</Link>
    </li>
  </ul>
);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className='fixed top-0 left-0 w-full z-10 bg-white shadow-sm'>
      <div className='max-w-6xl mx-auto p-3 flex justify-between items-center'>
        <Link to='/' className='flex-shrink-0'>
          <img src={logo} alt='Logo' className='h-14 w-20' />
        </Link>
        <div className='hidden md:flex gap-12 font-space-grotesk'>
          <NavLinks />
        </div>
        <div className='md:hidden flex items-center'>
          <button onClick={toggleNavbar}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="nav-links"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="overflow-hidden bg-white md:hidden"
          >
            <NavLinks isMobile />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
