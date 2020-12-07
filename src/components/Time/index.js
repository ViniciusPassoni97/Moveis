import React from 'react';

import './style.css';
import YearsIcon from '../../assets/icons/years.png';

function Time() {
  return (
    <div className='time'>
        <div className='time-info'>
          <p className='text-years'>20</p>
          <p className='text-years-info'>Yers of Sucessful Working The Market</p>
          <center>
          <button className='time-info-btn'>Learn More</button>
          </center>
        </div>
        <div className='time-img'>
            <img className='time-img-logo' src={YearsIcon} alt='logo time'/>
        </div>
    </div>
  );
}

export default Time;