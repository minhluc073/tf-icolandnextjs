import React, { useState } from "react";
import PropTypes from "prop-types";
import PartnerItem from "../partner-item";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

Partner.propTypes = {
  data: PropTypes.array,
};

const dataTile = {
  title: "PARTNERS",
  desc: "We are partners with countless major organisations allow the global.",
};

function Partner(props) {
  const { data } = props;

  return (
    <section className="partner style-3" id="partner">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="block-text center">
              <h2 className="heading">{dataTile.title}</h2>
              <p className="fs-20 mt-16">{dataTile.desc}</p>
            </div>

            <div className="partner__main">
              <Swiper
                className="swiper swiper-partner-3"
                modules={[Autoplay]}
                spaceBetween={30}
                loop={true}
                autoplay={{
                  delay: 0,
                }}
                speed={3000}
                breakpoints={{
                  0: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  767: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                  },
                  991: {
                    slidesPerView: 8,
                    spaceBetween: 30,
                  },
                }}
              >
                {data.slice(6, 15).map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="image">
                      <PartnerItem item={item} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <Swiper
                className="swiper swiper-partner-3"
                modules={[Autoplay]}
                spaceBetween={30}
                loop={true}
                breakpoints={{
                  0: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  600: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                  },
                  991: {
                    slidesPerView: 8,
                    spaceBetween: 30,
                  },
                  1280: {
                    slidesPerView: 8,
                    spaceBetween: 30,
                  },
                }}
                autoplay={{
                  delay: 0,
                  // reverseDirection: true,
                  // disableOnInteraction: true,
                }}
                speed={4000}
              >
                {data.slice(12, 21).map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="image">
                      <PartnerItem item={item} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partner;
