import React from 'react';
import Aspas from '../../assets/icons/acento.png';

import './style.css';

function PeoplesCards({url}) {
  return (
    <div className='peoples-cards'>
        <div className='peoples-cards-image'>
            <img src={url} alt='peoples-images'></img>
        </div>
        <div className='peoples-cards-info'>
            <div className='peoples-cards-info-header'>
                <div className='peoples-cards-info-header-title'>
                    <p>Louis Saville <span> /CEO at Google inc</span></p>
                </div>
                <div className='peoples-cards-info-header-image'>
                    <img src={Aspas} alt='IMG'/>
                </div>
            </div>
            <div className='peoples-cards-info-body'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
                elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua.</p>    
            </div>
        </div>
    </div>
  );
}

export default PeoplesCards;