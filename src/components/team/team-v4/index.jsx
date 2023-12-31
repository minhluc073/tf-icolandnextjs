import PropTypes from "prop-types";
import { Navigation } from "swiper";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Teampitem from "../team-item-v3";

Team.propTypes = {
  data: PropTypes.array,
};

const dataTitle = {
  subtitle: "Our Team",
  title: "Meet our members",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};

function Team(props) {
  const { data } = props;

  return (
    <section className="section-team style-2 mobie-pb0" id="team">
      <div className="container">
        <div className="row">
          <div
            className="col-xl-5 col-md-12"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="block-text">
              <h6 className="sub-title fs-18">{dataTitle.subtitle}</h6>
              <h3 className="title">{dataTitle.title}</h3>
              <p className="fs-20">{dataTitle.desc}</p>
            </div>
          </div>
          <div
            className="col-xl-7 col-md-12"
            data-aos="flip-down"
            data-aos-duration="800"
          >
            <Swiper
              className="swiper swiper-team-2"
              modules={[Navigation, Autoplay]}
              spaceBetween={30}
              navigation
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
            >
              {data.slice(21, 27).map((item) => (
                <SwiperSlide key={item.id}>
                  <Teampitem item={item} />
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
