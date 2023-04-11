import React from "react";
import "./testimonial.css";
import { Data } from "../testimonials/Data.js";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Testimonials = () => {
  return (
    <section className="testimonial container section">
      <h2 className="section__title">What My Clients Say!</h2>
      <span className="section__subtitle">Testimonials</span>

      <Swiper
        className="testimonial__container"
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        loop={true}
        grabCursor={true}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination]}
      >
        {Data.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide className="testimonial__card" key={id}>
              <img src={image} alt="" className="testimonial__img" />
              <h3 className="testimonial__name">{title}</h3>
              <p className="testimonial__description">{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
