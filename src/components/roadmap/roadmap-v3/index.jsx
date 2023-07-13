import PropTypes from "prop-types";
import Roadmapitem from "../roadmap-item-v3";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

Roadmap.propTypes = {
  data: PropTypes.array,
};

const dataTitle = {
  title: "THE ROADMAP",
};

function Roadmap(props) {
  const { data } = props;

  return (
    <section className="road-map style-6" id="roadmap">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="block-text center">
              <h2 className="heading">{dataTitle.title}</h2>
            </div>
            <div className="road-map__main">
              <Swiper
                className="swiper swiper-roadmap"
                modules={[Navigation, Autoplay]}
                spaceBetween={30}
                navigation
                loop
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                  },
                  1300: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                }}
              >
                {data.slice(11, 15).map((item) => (
                  <SwiperSlide key={item.id}>
                    <Roadmapitem item={item} />
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

export default Roadmap;
