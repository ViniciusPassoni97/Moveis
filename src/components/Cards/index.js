import React from 'react';

import './style.css';

function Cards({ url , paragrafo , title } ) {
  return (
      <div className='card'>
          <div className='card-image'>
            <img src={url} alt='card-logo' />
          </div>
          <div className='card-info'>
            <p>{paragrafo}</p>
            <h1>{title}</h1>
          </div>
      </div>
  );
}

export default Cards;