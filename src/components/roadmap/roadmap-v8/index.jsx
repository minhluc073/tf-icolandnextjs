import PropTypes from 'prop-types';
import Roadmapitem from '../roadmap-item-v5';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination} from 'swiper';

Roadmap.propTypes = {
    data : PropTypes.array,
};

const dataTitle = {
    desc: 'The use of crypto-currencies has become more widespread, and they are now increasingly accepted as a legitimate for transactions.',
    title: 'Road map',
}

function Roadmap(props) {
    const {data} = props;
   
    return (
        <section className="road-map style-8" id="roadmap">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="block-text center">
                        <h2 className="heading">{dataTitle.title}</h2>
                        <p className="fs-17">{dataTitle.desc}</p>
                    </div>

                    <div className="road-map__main">
                        <Swiper
                            className='swiper swiper-roadmap-8'
                            modules={[Pagination ]}
                            spaceBetween={30}
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
                            {
                                data.slice(21,27).map(item => (
                                    <SwiperSlide key={item.id}>
                                        <Roadmapitem item={item} />
                                    </SwiperSlide>
                                ))
                            }     
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Roadmap;