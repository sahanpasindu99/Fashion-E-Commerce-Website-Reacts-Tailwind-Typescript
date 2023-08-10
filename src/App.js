import React from 'react';

// import components
import Header from './components/Header';
import Footer from './components/Footer';
import NavMobile from './components/NavMobile';
import Hero from './components/Hero';
import Features from './components/Features';
import NewItems from './components/NewItems';
import Newsletter from './components/Newsletter';
import FeaturesSecond from './components/FeaturesSecond';
import Products from './components/Products';
import Tesrionial from './components/Testimonial'

const App = () => {
  return(
  <div className='w-full max-w-[1280px]
  mx-auto bg-white'>
    <Header/>
    <Hero/>
    <Features/>
    <NewItems/>
    <FeaturesSecond/>
    <Products/>
    <Tesrionial/>
    <Newsletter/>
    <Footer/>

  </div>
  );
};

export default App;
