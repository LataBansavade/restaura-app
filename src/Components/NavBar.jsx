
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';  // Import NavLink
import logo from '../assets/logo.png';
import { LINKS } from '../constants';
import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa6';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className='fixed top-2 z-50 flex w-full bg-transparent '>
      <div className='flex items-center justify-between w-full p-4 backdrop-blur-lg lg:px-8'>

        <img src={logo} alt='logo' width={100} height={23} />
        
        {/* Desktop Links */}
        <div className='hidden space-x-6 lg:flex'>
          {
            LINKS.map((link, index) => (
              <NavLink 
                key={index} 
                to={link.targetId}  // Use `to` for navigation to different routes
                className={`text-sm ${index !== 0 ? 'border-l-2 border-neutral-300/20 pl-2' : ''} hover:opacity-50`}
                onClick={() => setIsMobileMenuOpen(false)} // Close the mobile menu if link clicked on mobile
              >
                {link.text}
              </NavLink>
            ))
          }
        </div>

        {/* Mobile Menu Button */}
        <div className='lg:hidden'>
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='w-full backdrop-blur-lg lg:hidden'>
          {
            LINKS.map((link, index) => (
              <NavLink 
                key={index} 
                to={link.targetId}  // Use `to` for navigation
                className='block p-4 uppercase tracking-tighter'
                onClick={() => setIsMobileMenuOpen(false)}  // Close menu when link is clicked
              >
                {link.text}
              </NavLink>
            ))
          }
        </div>
      )}
    </nav>
  );
};

export default NavBar;


