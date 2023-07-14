import PropTypes from "prop-types";
import Teampitem from "../team-item-v6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

Team.propTypes = {
  data: PropTypes.array,
};

const dataTitle = {
  title: "Our team",
  desc: "With help from our teams, contributors and investors these are the milestones we are looking forward to achieve.",
};

function Team(props) {
  const { data } = props;

  return (
    <section className="section-team style-7" id="team">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="block-text center">
              <h3 className="heading">{dataTitle.title}</h3>
              <p className="mt-16 fs-17 pd25">{dataTitle.desc}</p>
            </div>
          </div>
        </div>
        <div className="row mt-29">
          <div className="col-12">
            <Swiper
              className="swiper swiper-team-7"
              spaceBetween={30}
              modules={[Pagination]}
              pagination={{ clickable: true }}
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
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
            >
              {data.slice(28, 34).map((item) => (
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
