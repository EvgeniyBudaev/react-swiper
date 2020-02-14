import React from 'react';
import Swiper from 'react-id-swiper';
import './simple-swiper.css';
import './simple-swiper.scss';
import 'swiper/css/swiper.css'
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';

const SimpleSwiper = () => {
  const params = {
    pagination: '.swiper-pagination',
    effect: 'cube',
    grabCursor: true,
    cube: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }

  return (
    

    <Swiper {...params}>
      
      <div className="swiper-slide slide1"><img src={img1}></img></div>

      <div className="swiper-slide slide2"><img src={img2}></img></div>

    </Swiper>

    
  )
  };
 
export default SimpleSwiper;