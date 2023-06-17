"use client"
import React from 'react'
import Brands from '../../components/home/Brands';
import MiniBanners from '../../components/home/MiniBanners';
import FeaturedProducts from '../../components/home/FeaturedProducts';
import Deals from '../../components/home/Deals';
import Deals2 from '../../components/home/Deals2';
import News from '../../components/home/News';
import Services from '../../components/home/Services';
import MainSlider from '../../components/home/MainSlider';

const Layout = () => {
  return (
    <div className='home'>
      <MiniBanners />
      <Deals />
      <Deals2 />
      <News />
      <Services />
    </div>
  )
}

export default Layout