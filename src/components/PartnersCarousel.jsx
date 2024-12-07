import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img4 from "../assets/images/partners/b2b.jpg";
import img5 from "../assets/images/partners/bsmraau_logo.png";
import img6 from "../assets/images/partners/a2i_logo.svg";

// Import Swiper styles
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";

//import "./styles.css";

export default function App() {
  return (
    <section className="section service" id="partners" aria-label="service">
      <div className="container">
        <p className="section-subtitle text-center">-Lorem ipsum dolor-</p>
        <h2 className="h2 section-title text-center">Our Partners</h2>
        <p className="section-text text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <Swiper
          watchSlidesProgress={true}
          loop={true}
          slidesPerView={4}
          className="mySwiper"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation]}
        >
          <SwiperSlide className="flex justify-center items-center">
            <img
              src={img6}
              width={200}
              className="object-contain max-w-full max-h-full"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <img
              src={img4}
              width={200}
              style={{ height: "90px" }}
              className="object-contain max-w-full max-h-full"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <img
              src={img5}
              width={200}
              className="object-contain max-w-full max-h-full"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <img
              src={img6}
              width={200}
              className="object-contain max-w-full max-h-full"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <img
              src={img4}
              width={200}
              style={{ height: "90px" }}
              className="object-contain max-w-full max-h-full"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
