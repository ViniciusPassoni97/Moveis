import React from 'react';

import './style.css';

import image  from '../../assets/icons/image1-blog.png';
import image2  from '../../assets/icons/image2-blog.png';

function Blog() {
  return (
    <div>
        <div className='blog-header'>
            <p className='blog-header-text'>LETEST NEWS</p>
            <p className='blog-header-info'>From Our Blog</p>
        </div>
        <div className='blog-image'>
            <div className='blog-image-card'>
                <div className='blog-image-card-img-div'>
                  <img className='blog-image-card-img' src={image} alt='img'/>
                </div>
                <div className='blog-info'>
                <p className='blog-image-card-text'>2020 Interior Design Trends</p>
                <p className='blog-image-card-info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do eiusmod incididunt ut labore et dolore magna aliqua.</p>
                <button className='blog-image-card-button'>Continue Reading ...</button>
                </div>
            </div>
            <div className='blog-image-card'>
              <div className='blog-image-card-img-div'>
                  <img className='blog-image-card-img' src={image2} alt='img'/>
              </div>
              <div  className='blog-info'>
                <p className='blog-image-card-text'>2020 Interior Design Trends</p>
                <p className='blog-image-card-info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do eiusmod incididunt ut labore et dolore magna aliqua.</p>
                <button className='blog-image-card-button'>Continue Reading ...</button>
              </div>
            </div>    
        </div>
    </div>
  );
}

export default Blog;