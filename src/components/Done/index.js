import React from 'react';

import './style.css';

function Done() {
  return (
    <div className='done'>
        <div className='done-info'>
            <p className=''>980</p>
            <p className=''>Project</p>
        </div>
        <div className='done-info'>
            <div className='done-info-group'>
                <p className=''>520</p>
                <p className=''>Happy Client</p>
            </div>
            <div className='done-info-group'>
                <p className=''></p>
                <p className=''></p>
            </div>
            <div className='done-info-group'>
                <p className=''>330</p>
                <p className=''>Winners</p>
            </div>
            <div className='done-info-group'>
                <p className=''>120</p>
                <p className=''>Recoment</p>
            </div>
        </div>
    </div>
  );
}

export default Done;