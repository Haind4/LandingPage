import React from 'react'
import './Home.scss';
import Header from './components/Header';
import BannerSlide from './components/BannerSlide';
import AboutCompany from './components/AboutCompany';
import Sologan from './components/Sologan';
import NewsEvents from './components/NewsEvents';
import Participation from './components/Participation';
import Staff from './components/Staff';
import Footer from './components/Footer';
function Home() {
  return (
    <div className='EISMIEJITG'>
      <Header />
      <BannerSlide />
      <AboutCompany />
      <Sologan />
      <NewsEvents />
      <Participation />
      <Staff />
      <Footer />
    </div>
  )
}

export default Home