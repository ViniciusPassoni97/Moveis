import React from 'react';

import './style.css';

function Cards(props) {
  return (
      <div className='card'>
          <div className='card-image'>
            <img src={props.url} alt='card-logo' />
          </div>
          <div className='card-info'>
            <h1>{props.title}</h1>
            <p>{props.paragrafo}</p>
          </div>
      </div>
  );
}

export default Cards;