import PropTypes from "prop-types";
import PartnerItem from "../partner-item";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

Partner.propTypes = {
  data: PropTypes.array,
};

function Partner(props) {
  const { data } = props;
  return (
    <section className="section-partner style-2" id="partner">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Swiper
              className="swiper swiper-partner-2"
              modules={[Autoplay]}
              spaceBetween={30}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                600: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                991: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1440: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
            >
              {data.slice(0, 5).map((item) => (
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
    </section>
  );
}

export default Partner;
