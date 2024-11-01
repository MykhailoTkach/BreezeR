import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo_big.png';
import navProfile from '../../assets/nav-profile.svg';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-logo-container'>
        <img src={logo} alt='' className='nav-logo' />
        <p className='nav-text'>Breezer</p>
      </div>
      <img src={navProfile} alt='' className='nav-profile' />
    </div>
  );
};

export default Navbar;
