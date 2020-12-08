import React from 'react';

import './style.css';

function Done() {
  return (
    <div className='done'>
        <div className='done-info-message'>
            <p className='done-info-message-number'>+3000 Completed Work</p>
            <p className='done-info-message-info'>Which WE have Successfully Done</p>
        </div>
        <div className='done-info'>
            <div className='done-info-group'>
                <p className='number'>980</p>
                <p className='number-info'>Project</p>
            </div>
            <div className='done-info-group'>
                <p className='number'>520</p>
                <p className='number-info'>Happy Client</p>
            </div>
            <div className='done-info-group'>
                <p className='number'>330</p>
                <p className='number-info'>Winners</p>
            </div>
            <div className='done-info-group'>
                <p className='number'>120</p>
                <p className='number-info'>Recoment</p>
            </div>
        </div>
    </div>
  );
}

export default Done;