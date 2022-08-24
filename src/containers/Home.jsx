import React from 'react'
import About from '../components/About'
import Featured from '../components/Featured'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import CustomCursor from '../customcursor'
import '../styles/home.scss'

export default function Home() {
  return (
    <>
      <CustomCursor />
      <div className="main-container">
          <Navbar />
          <Header />
          <Featured />
          <About />
          <Gallery />
          <Footer />
      </div>
    </>
  )
}
