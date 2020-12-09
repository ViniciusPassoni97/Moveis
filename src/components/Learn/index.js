import React from 'react';
import MaskGroup from '../../assets/icons/maskgroup.png';
import'./style.css';

function Learn() {
    return (
        <div className='about'>
            <div className='about-info'>
                <p className='about-info-header'>ABOUT UT</p>
                <p className='about-info-title'>Adalah menjadi satu fakta bahawa pembaca akan terganggu oleh text yang boleh</p>
                <p className='about-info-paragrafo'>Lorem Ipsum adalah text contoh digunakan didalam industri pencetakan dan typesetting.
                 Lorem Ipsum telah menjadi text contoh semenjak tahun ke 1500an, apabila pencetak yang kurang terkenal mengambil sebuah galeri cetak dan merobakanya menjadi satu buku spesimen.
                 Ia telah bertahan bukan hanya selama lima kurun,
                 tetapi telah melonjak ke era typesetting elektronik, dengan tiada perubahan ketara</p>
                 <button className='about-info-btn'>Learn More</button>
            </div>
            <div className='about-image'>
                <img className='about-image-img' src={MaskGroup} alt='Logo'/>
            </div>
        </div>
   );
}

export default Learn;