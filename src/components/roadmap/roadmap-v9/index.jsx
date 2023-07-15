import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import Roadmapitem from "../roadmap-item-v5";
import { Swiper, SwiperSlide } from "swiper/react";

Roadmap.propTypes = {
  data: PropTypes.array,
};

const dataTitle = {
  title: "Roadmaps Launch Timeline",
  desc: "ICOLand is a collection of 10,000 Bored Ape NFTs unique digital collectibles living on the Ethereum blockchain.",
};

function Roadmap(props) {
  const { data } = props;

  return (
    <section className="dashboard">
      <div className="dashboard__content">
        <div className="dashboard__main">
          <section className="road-map style-8">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-md-12">
                  <div className="block-text">
                    <h2 className="title">{dataTitle.title}</h2>
                    <p className="fs-20">{dataTitle.desc}</p>
                  </div>
                </div>
                <div className="col-xl-6 col-md-12">
                  <div className="group-img">
                    <Image
                      src={require("../../../assets/images/item/nft-rm-01.png")}
                      alt="ICOLand"
                    />
                    <Image
                      src={require("../../../assets/images/item/nft-rm-02.png")}
                      alt="ICOLand"
                    />
                    <Image
                      src={require("../../../assets/images/item/nft-rm-03.png")}
                      alt="ICOLand"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="road-map__main">
                    <Swiper
                      className="swiper swiper-roadmap-8"
                      spaceBetween={30}
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
                      {data.slice(21, 27).map((item) => (
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
        </div>
      </div>
    </section>
  );
}

export default Roadmap;
