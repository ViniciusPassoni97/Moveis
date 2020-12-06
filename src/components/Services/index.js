import React from 'react';
import Card from '../Cards/index.js';
import LogoCardService from '../../assets/icons/service.png';
import './style.css';

// import { Container } from './styles';

function Services() {
  return (
      <div className='service'>
          <div className='div-card'> 
              <Card color='blue' url={LogoCardService} title='Interior Design' paragrafo='Lorem ipsum dolor sit amet
              , consectetur adipiscing elit.'/>
          </div>
      </div>
  );
}

export default Services;