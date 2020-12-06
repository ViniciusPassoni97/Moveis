import React from 'react';
import imovel from '../../assets/icons/imovel.png';
import  './style.css';

function Home() {
  return (
      <div className='Home'>
          <div className='text'>
            <p className='text-group-home'>Moder Interior</p>
            <h1 className='text-group-home'>Create Your Interior Design</h1>
            <p className='text-group-home'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <div className='button-home'>
                <button className='button-group-home' placeholder='Login'>Login</button>
            </div>          
          </div>
          <div className='image'>
                <img className='imovel' src={imovel} alt='Imovel' />
          </div>
      </div>
  );
}

export default Home;