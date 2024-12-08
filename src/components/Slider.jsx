import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import img7 from '../assets/images/gallery/img-7.jpeg';
import img17 from '../assets/images/gallery/img-17.jpeg';
import img22 from '../assets/images/gallery/img-22.jpeg';
import img11 from '../assets/images/gallery/img-11.jpeg';
import img12 from '../assets/images/gallery/img-12.jpeg';
import img19 from '../assets/images/gallery/img-19.jpeg';


import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';

export default function Slider() {
  return (
    <>
    <section className="section service" id="gallery" aria-label="service">
        <div className="container">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
        }}
      >
        <SwiperSlide><img src={img22} width={'100%'} /></SwiperSlide>
        <SwiperSlide><img src={img12} width={'100%'} /></SwiperSlide>
        <SwiperSlide><img src={img7} width={'100%'} /></SwiperSlide>
        <SwiperSlide><img src={img17} width={'100%'} /></SwiperSlide>
        <SwiperSlide><img src={img11} width={'100%'}/></SwiperSlide>
        <SwiperSlide><img src={img19} width={'100%'} /></SwiperSlide>
      </Swiper>
      </div>
</section>
    </>
  );
}
