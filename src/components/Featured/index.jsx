import React from 'react';
import './index.scss';
import photos from '../../data'

export default function Featured() {
  const [firstImage, secondImage] = photos;
  return (
    <section className='featured-section'>
        <div className='featured-row-layout'>
            <h6>green</h6>
            <img src={firstImage} alt="" />
        </div>
        <div className='featured-col-layout'>
          <h6>lily</h6>
          <img src={secondImage} alt="" />
        </div>
    </section>
  )
}
