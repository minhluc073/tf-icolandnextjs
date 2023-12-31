import React, { useState } from "react";
import PropTypes from "prop-types";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Teamitem1 from "../team-item-v1";
import Teamitem2 from "../team-item-v2";

Team.propTypes = {
  data: PropTypes.array,
};

const dataTitle = {
  title: "MEET OUR TEAM",
  title2: "BOARD MEMBER",
};

function Team(props) {
  const { data } = props;

  return (
    <section className="section-team style-6" id="team">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="block-text center">
              <h2 className="heading">{dataTitle.title}</h2>
            </div>
          </div>
          {data.slice(11, 15).map((item) => (
            <Teamitem1 key={item.id} item={item} />
          ))}
        </div>
      </div>

      <div className="container s2">
        <div className="row">
          <div className="col-12">
            <div className="block-text center">
              <h2 className="heading">{dataTitle.title2}</h2>
            </div>
            <Swiper
              className="swiper swiper-team-6"
              spaceBetween={30}
              speed={2000}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                  spaceBetween: 26,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 26,
                },
                1024: {
                  slidesPerView: 6,
                  spaceBetween: 26,
                },
                1300: {
                  slidesPerView: 8,
                  spaceBetween: 26,
                },
              }}
              modules={[Autoplay]}
              loop
              autoplay={{
                delay: 1,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
            >
              {data.slice(42, 51).map((item) => (
                <SwiperSlide key={item.id}>
                  <Teamitem2 item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
