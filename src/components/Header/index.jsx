import React from 'react';
import './index.scss'

export default function Header() {
  return (
    <div className='header-container'>
      <ul className='header-menu'>
        <li>Intro</li>
        <li>About</li>
        <li>Featured</li>
      </ul>
      <h1 id="header-text">Ayle</h1>
    </div>
  )
}
