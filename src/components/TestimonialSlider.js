import React from 'react';

import {Swiper,SwiperSlide} from 'swiper/react';
import { testimonial } from '../data';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper';

const TestimonialSlider = () => {
  return(
    <Swiper className='testimonialSlider' modules={[Navigation,Autoplay]} navigation={true} autoplay={true}>
      {testimonial.persons.map((person,index)=>{
        const{avatar,name,message,occupation}=person;
        return(
          <SwiperSlide key={index}>
            <div className='flex flex-col min-h-[250px] '>
              <div className='flex items-center  gap-x-5 mb-9'>
                <img  src={avatar.type} alt=''></img>
                <div>
                  <div className='text-xl  font-semibold'>{name}</div>
                  <div className='text-gray-500'>{occupation}</div>
                </div>
                <div className='text-gray-800 text-lg max-w-[680px]'>{message}</div>
              </div>

            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
