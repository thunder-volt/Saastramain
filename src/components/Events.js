import React from 'react'
import '../styles/events.css'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Events = () => {
    return (
        <div className="events">
            <div className="events-heading">
                Events
            </div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={20}
                slidesPerView={3}
                navigation
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    768: {

                        slidesPerView: 2,
                    },

                    1222: {
                        slidesPerView: 3,
                    }
                }}
            >
                <SwiperSlide><div className="events-hexagon">
                    <div className="shape">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Jn0L5sxV4-pOZKEXnJ0luQIFQCrIMvMgUQ&usqp=CAU" alt="" />
                        <div className="events-content">
                            <div>
                                <h2>Some Events</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quae delectus saepe maiores aliquid dolorem.</p>
                            </div>
                        </div>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="events-hexagon">
                    <div className="shape">
                        <img src="https://www.bsigroup.com/globalassets/localfiles/375x275/conference-media-center-375x275.jpg" alt="" />
                        <div className="events-content">
                            <div>
                                <h2>Some Events</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quae delectus saepe maiores aliquid dolorem.</p>
                            </div>
                        </div>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="events-hexagon">
                    <div className="shape">
                        <img src="https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/irving-redesign/Events_Page_Header_2903ed9c-40c1-4f6c-9a69-70bb8415295b.jpg" alt="" />
                        <div className="events-content">
                            <div>
                                <h2>Some Events</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quae delectus saepe maiores aliquid dolorem.</p>
                            </div>
                        </div>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="events-hexagon">
                    <div className="shape">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Jn0L5sxV4-pOZKEXnJ0luQIFQCrIMvMgUQ&usqp=CAU" alt="" />
                        <div className="events-content">
                            <div>
                                <h2>Some Events</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quae delectus saepe maiores aliquid dolorem.</p>
                            </div>
                        </div>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="events-hexagon">
                    <div className="shape">
                        <img src="https://www.bsigroup.com/globalassets/localfiles/375x275/conference-media-center-375x275.jpg" alt="" />
                        <div className="events-content">
                            <div>
                                <h2>Some Events</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quae delectus saepe maiores aliquid dolorem.</p>
                            </div>
                        </div>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="events-hexagon">
                    <div className="shape">
                        <img src="https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/irving-redesign/Events_Page_Header_2903ed9c-40c1-4f6c-9a69-70bb8415295b.jpg" alt="" />
                        <div className="events-content">
                            <div>
                                <h2>Some Events</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quae delectus saepe maiores aliquid dolorem.</p>
                            </div>
                        </div>
                    </div>
                </div></SwiperSlide>
            </Swiper>
            {/* <a href="/footer" className='events-btn'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Footer
            </a> */}
        </div>
    )
}

export default Events