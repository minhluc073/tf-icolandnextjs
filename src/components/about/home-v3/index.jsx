import PropTypes from "prop-types";
import AboutItem from "../about-item3";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../../../components/button/button-st1";

About.propTypes = {
  data: PropTypes.array,
};

const dataTitle = {
  title: "WHY ADOPT AN APPROVING CORGI?",
  desc: "Well, none of their negativity will keep you down! Because you have the only approval you need waiting for you back at your computer… your lovable, adorable Approving Corgi!",
};

function About(props) {
  const { data } = props;

  return (
    <section className="about style-6">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-md-5">
            <div className="block-text">
              <h2 className="title">{dataTitle.title}</h2>
              <p className="text fs-20">{dataTitle.desc}</p>
              <Button title="SEE LOYALTY PROGRAM" path="#" />
            </div>
          </div>
          <div className="col-xl-7 col-md-7">
            <div className="about__content">
              <Swiper
                className="swiper swiper-about-1"
                modules={[Autoplay]}
                direction={"vertical"}
                slidesPerView={3}
                spaceBetween={20}
                loop
                autoplay={{
                  delay: 1,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                speed={2000}
                breakpoints={{
                  320: {
                    slidesPerView: 2,
                    direction: "horizontal",
                  },
                  500: {
                    slidesPerView: 3,
                    direction: "horizontal",
                  },
                  768: {
                    slidesPerView: 3,
                    direction: "vertical",
                  },
                }}
              >
                {data.slice(18, 25).map((item) => (
                  <SwiperSlide key={item.id}>
                    <AboutItem item={item} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <Swiper
                className="swiper swiper-about-2"
                modules={[Autoplay]}
                direction={"vertical"}
                spaceBetween={20}
                slidesPerView={3}
                loop
                autoplay={{
                  delay: 1,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                speed={2000}
                breakpoints={{
                  320: {
                    slidesPerView: 2,
                    direction: "horizontal",
                  },
                  500: {
                    slidesPerView: 3,
                    direction: "horizontal",
                  },
                  768: {
                    slidesPerView: 3,
                    direction: "vertical",
                  },
                }}
              >
                {data.slice(18, 25).map((item) => (
                  <SwiperSlide key={item.id}>
                    <AboutItem item={item} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <Swiper
                className="swiper swiper-about-1"
                modules={[Autoplay]}
                direction={"vertical"}
                spaceBetween={20}
                slidesPerView={3}
                loop
                autoplay={{
                  delay: 1,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                speed={2000}
                breakpoints={{
                  320: {
                    slidesPerView: 2,
                    direction: "horizontal",
                  },
                  500: {
                    slidesPerView: 3,
                    direction: "horizontal",
                  },
                  768: {
                    slidesPerView: 3,
                    direction: "vertical",
                  },
                }}
              >
                {data.slice(18, 25).map((item) => (
                  <SwiperSlide key={item.id}>
                    <AboutItem item={item} />
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

export default About;
