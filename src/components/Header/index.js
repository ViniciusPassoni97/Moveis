import React from 'react';
import logo from '../../assets/icons/logo.png'
import  './style.css';

function Header() {
  return (
    <div className='header'>
      <div className='logo'>
        <img src={logo} alt='logo'/>
      </div>
      <div className='info'>
        <div className='text-group-div'>
        <p className='text-group'>Home</p>
        <p className='text-group'>Project</p>
        <p className='text-group'>Services</p>
        <p className='text-group'>About</p>
        <p className='text-group'>Blog</p>
        <p className='text-group'>Shop</p>
        <p className='text-group'>Contact</p>
        </div>
        <div className='button-header'>
          <button className='button-group' placeholder='Login'>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Header;