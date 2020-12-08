import React from 'react';
import PeopleCard from '../PeoplesCards/index.js';
import People1 from '../../assets/icons/people1.png';
import People2 from '../../assets/icons/people2.png';
import'./style.css';

function Peoples() {
  return (
      <div className='people'>
          <div className='people-info'> 
            <p className=''>TESTIMONIALS</p>
            <p className=''>Client says about us</p>
          </div>
          <div className='people-card'>
              <PeopleCard url={People1}/>
              <PeopleCard url={People2}/>
          </div>
      </div>
  );    
}

export default Peoples;