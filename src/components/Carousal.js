
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "../styles/env-styles.css"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles/env-carousal.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function App() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                hashNavigation={{
                    watchState: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                Autoplay={true}
                className="mySwiper"
            >
                <SwiperSlide data-hash="slide1">

                </SwiperSlide>
                <SwiperSlide data-hash="slide2">

                </SwiperSlide>
                <SwiperSlide data-hash="slide3">

                </SwiperSlide>
            </Swiper>
        </>
    );
}