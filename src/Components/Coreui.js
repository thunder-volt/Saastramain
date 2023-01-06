import React from 'react'
import { CCarousel, CCarouselItem, CImage, CCarouselCaption } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import "../styles/env-carousal.css"
import img1 from "../Images/bg2.jpg";
import img2 from "../Images/bg3.jpg";
import img3 from "../Images/bg4.jpg";
const Coreui = () => {
    return (
        <CCarousel controls indicators dark>

            <CCarouselItem >

                <CImage className="d-block w-100" src={img1} alt="slide 1" />

                <CCarouselCaption className="d-none d-md-block">

                    <h5>First slide label</h5>

                    <p>Some representative placeholder content for the first slide.</p>

                </CCarouselCaption>

            </CCarouselItem>

            <CCarouselItem>

                <CImage className="d-block w-100" src={img2} alt="slide 2" />

                <CCarouselCaption className="d-none d-md-block">

                    <h5>Second slide label</h5>

                    <p>Some representative placeholder content for the first slide.</p>

                </CCarouselCaption>

            </CCarouselItem>

            <CCarouselItem>

                <CImage className="d-block w-100" src={img3} alt="slide 3" />
                <CCarouselCaption className="d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </CCarouselCaption>
            </CCarouselItem>
        </CCarousel>
    )
}

export default Coreui
