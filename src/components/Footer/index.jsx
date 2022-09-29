import React from 'react';
import './index.scss'
import SectionHeader from '../SectionHeader';

export default function Footer() {
  return (
    <div className='footer-section'>
      <SectionHeader title="Made By" />
      <h1 className='location' id="location">
        Ilia
      </h1>
    </div>
  )
}
