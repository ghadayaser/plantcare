import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../../assets/images/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#050F02] text-[#e5d5c5] font-oswald fixed inset-x-0 top-0 z-50 shadow-lg">
      <nav className="flex items-center justify-between px-6 py-4 lg:px-8" aria-label="Global">
        <Link to={'/home'} className="lg:pe-4 flex items-center">
          <img src={logo} width={40} alt="Plant Care Logo" className="mr-2" />
          <span className="text-lg font-bold text-[#8c826d] hidden lg:block">Plant Care</span>
        </Link>
        
        {/* Mobile Menu Button */}
        <div onClick={() => setIsOpen(true)} className="flex lg:hidden">
          <button type="button" className="p-2 text-gray-300 bg-transparent hover:bg-gray-700 rounded-md">
            <span className="sr-only">Open menu</span>
            <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-6 capitalize text-lg">
          <NavLink to={'/home'} className="text-[#8c826d] hover:text-[#bab09b]">Home</NavLink>
          <NavLink to={'/profile'} className="text-[#8c826d] hover:text-[#bab09b]">Profile</NavLink>
          <NavLink to={'/setting'} className="text-[#8c826d] hover:text-[#bab09b]">Setting</NavLink>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end space-x-4">
          <NavLink to={''} className="text-[#8c826d] hover:text-[#bab09b]">Signup</NavLink>
          <NavLink to={'/login'} className="text-[#8c826d] hover:text-[#bab09b]">Login →</NavLink>
          <span className="text-[#8c826d] hover:text-[#bab09b] cursor-pointer">Log Out</span>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      <div className={isOpen ? "lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50" : "hidden"} role="dialog" aria-modal="true">
        <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#1a1a1a] p-6 shadow-xl ring-1 ring-gray-900/10">
          <div className="flex items-center justify-between">
            <NavLink to={'/home'} className="flex items-center">
              <img src={logo} width={40} alt="Plant Care Logo" className="mr-2" />
              <span className="text-lg font-bold text-[#8c826d]">Plant Care</span>
            </NavLink>
            <button onClick={() => setIsOpen(false)} type="button" className="p-2 text-gray-300 bg-transparent hover:bg-gray-700 rounded-md">
              <span className="sr-only">Close menu</span>
              <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="mt-6">
            <nav className="space-y-4 text-lg">
              <NavLink to={'/home'} className="block text-[#8c826d] hover:text-[#bab09b]">Home</NavLink>
              <NavLink to={'/profile'} className="block text-[#8c826d] hover:text-[#bab09b]">Profile</NavLink>
              <NavLink to={'/setting'} className="block text-[#8c826d] hover:text-[#bab09b]">Setting</NavLink>
            </nav>
          </div>
          
          <div className="mt-6 space-y-4 text-lg">
            <NavLink to={''} className="block text-[#8c826d] hover:text-[#bab09b]">Signup</NavLink>
            <NavLink to={'/login'} className="block text-[#8c826d] hover:text-[#bab09b]">Login →</NavLink>
            <span className="block text-[#8c826d] hover:text-[#bab09b] cursor-pointer">Log Out</span>
          </div>
        </div>
      </div>
    </header>
  );
}
