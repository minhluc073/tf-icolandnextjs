import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Blogitem from "../components/blog/blog-item6";
import Featureitem from "../components/features/features-item7";
import dataBlog from "../data/data-blog";
import dataFeature from "../data/data-feature";
import Link from "next/link";
import PageTitle from "../components/page-title";
import Header from "../components/header";
import Footer from "../components/footer/footer-v2";

function Blogv2(props) {
  return (
    <div className="home-blog backgroup-body">
      <Header />
      <PageTitle
        title="Blog Style 2"
        desc="Nec lorem tortor, tellus, netus sit at nulla sed. Urna amet, sollicitudin ultrices gravida magna augue."
      />
      <section className="blog-page-2">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="blog-page__main">
                <div className="main-content">
                  {dataBlog.slice(24, 28).map((item) => (
                    <Blogitem key={item.id} item={item} />
                  ))}
                  <ul className="pagination">
                    <li>
                      <Link href="#">1</Link>
                    </li>
                    <li className="active">
                      <Link href="#">2</Link>
                    </li>
                    <li>
                      <Link href="#">3</Link>
                    </li>
                    <li>
                      <Link href="#">
                        <svg
                          width="16"
                          height="14"
                          viewBox="0 0 16 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.33203 7H14.6654"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8.83203 1.16699L14.6654 7.00033L8.83203 12.8337"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-blog">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block-text">
                <h3 className="heading">Featured News</h3>
              </div>

              <div className="featured-blog__main">
                <Swiper
                  className="swiper swiper-blog style"
                  spaceBetween={30}
                  modules={[Navigation]}
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
                  navigation
                >
                  {dataFeature.slice(26, 32).map((item) => (
                    <SwiperSlide key={item.id}>
                      <div className="image">
                        <Featureitem item={item} />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
      {<Footer />}
    </div>
  );
}

export default Blogv2;
