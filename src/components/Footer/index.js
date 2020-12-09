import React from 'react';

import './style.css';
import linkedlogo from '../../assets/icons/linkedlogo.png';
import facebooklogo from '../../assets/icons/icon-footer2.png';
import IconFooter from '../../assets/icons/icon-footer.png';
import instagram from '../../assets/icons/instagram.png';
import twitter from '../../assets/icons/twitter.png';

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-img'>
            <img className='footer-img-image' src={IconFooter} alt='icon-footer'/>
            <div className='footer-img-text-div'>
              <p className='footer-img-text'>But i must explain to you all this mistaken.</p>
              <p className='footer-img-text'>idea of dencouncing pleasure</p>
            </div>
        </div>
        <div className='footer-img-quick'>
            <p className='footer-img-title'>Quick Links</p>
            <p className='footer-img-title-group'>About Our Company</p>
            <p className='footer-img-title-group'>Services WE provide Career</p>
            <p className='footer-img-title-group'>Opportunity Privacy</p>
            <p className='footer-img-title-group'>Policy Contact US</p>
        </div>
        <div className='footer-img-company'>
            <p className='footer-img-title'>Company</p>
            <p className='footer-img-title-group'> About Company</p>
            <p className='footer-img-title-group'>SOur Testimonials</p>
            <p className='footer-img-title-group'>Latest News Our</p>
            <p className='footer-img-title-group'>Misson</p>
            <p className='footer-img-title-group'>Get a free Quot</p>
        </div>
        <div className='footer-img-contact'>
            <p className='footer-img-title'>Contact us</p>
            <p className='footer-img-title-group'>Sagrada Familia, Herba</p>
            <p className='footer-img-title-group'>Herba Street Front USA</p>
            <p className='footer-img-title-group'>brandoxide@gmail.com</p>
            <p className='footer-img-title-group'>002-568423591</p>
        </div>
        <div className='footer-img-icons'>
            <div>
              <p className='footer-img-icons-text'>Follow Us</p>
            </div>
            <div className='footer-img-icons-card'>
              <div className='footer-img-group-div'>
                <img className='footer-img-group' src={linkedlogo} alt=''/>
              </div>
              <div className='footer-img-group-div'>
                <img className='footer-img-group' src={twitter} alt=''/>
              </div>
              <div className='footer-img-group-div'>
                <img className='footer-img-group' src={instagram} alt=''/>
              </div>
              <div className='footer-img-group-div'>
                <img className='footer-img-group' src={facebooklogo} alt=''/>
              </div>
            </div>
        </div>
    </div>
  );
}

export default Footer;