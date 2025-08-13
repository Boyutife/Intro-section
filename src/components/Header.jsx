import { useState } from 'react';
import logo from '../assets/logo.svg';
import iconMenu from '../assets/icon-menu.svg';
import MenuItems from './MenuItems';

import closeMenu from '../assets/icon-close-menu.svg';

const Header = ({ setIsOpen }) => {
  const handleMenuIcon = () => {
    setIsOpen(true);
  };

  return (
    <>
      <header className="flex  w-full p-4 px-6 items-center">
        <div className="flex justify-between md:justify-normal  w-full gap-8">
          <img src={logo} alt="logo" />
          <button onClick={handleMenuIcon}>
            <img src={iconMenu} alt="menu icon" className="md:hidden" />
          </button>
          <div className="w-full hidden md:flex">
            <MenuItems />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
