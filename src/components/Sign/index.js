import React from 'react';

import  './style.css';

function Sign() {
  return (
      <div className='sign'>
        <div className='sign-text'>
            <p className='sign-text-title'>DON’T FORGET TO SIGN UP</p>
            <p className='sign-text-title-line'></p>
            <p className='sign-text-info'>Find out early about all upcoming promotions and new product releases with our newsletter.</p>
        </div>
        <div className='sign-button'>
            <input className='sign-button-input' placeholder='Enter you email address ...'/>
            <button className='sign-button-button'>Subscribe</button>
        </div>
      </div>
  );
}

export default Sign;