import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./swiper.css";
import { Autoplay, Navigation } from "swiper/modules";

// Import images
import img1 from "../assets/images/partners/b2b.jpg";
import img2 from "../assets/images/partners/bsmraau_logo.png";
import img3 from "../assets/images/partners/img-1.png";
import img4 from "../assets/images/partners/ric.png";

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
          loop={true}
          className="mySwiper"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          modules={[Autoplay, Navigation]}
        >
          {/* Carousel slides */}
          <SwiperSlide className="flex justify-center items-center">
            <img
              src={img1}
              width={200}
              className="object-contain max-w-full max-h-full"
              alt="Partner 1"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <img
              src={img2}
              width={200}
              className="object-contain max-w-full max-h-full"
              alt="Partner 2"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <img
              src={img3}
              width={200}
              className="object-contain max-w-full max-h-full"
              alt="Partner 3"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <img
              src={img4}
              width={200}
              className="object-contain max-w-full max-h-full"
              alt="Partner 4"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
