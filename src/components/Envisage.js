import React from 'react'
// import Carausal from '../components/Carousal'
import '../styles/env-styles.css'
import games from '../Images/games-logo.jpeg'
import Coreui from './Coreui'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import Antd from './Antd'

import NavBar from './navigation/NavBar';
import Footer from './Footer';
import TopBar from './TopBar';

const Envisage = () => {
  return (
    <body>
      <TopBar />
      <NavBar />  
      <div className='env-container'>
        <div className='env-heading'>ENVISAGE</div>
        <div className='env-vision'>
          <div className='vision-heading'>
            VISION
          </div>
          <div className='vision-content'>
            As the tagline “Where Technology Meets Entertainment” suggests, we inspire and enable students to explore their creative and engineering skills through various technical projects for the techno cultural show and the tech exhibition during Shaastra.
          </div>
        </div>
        <div className='env-about'>
          <div className='vision-heading'>
            ABOUT
          </div>
          <div className='vision-content'>
            The Annual Technical Festival of IIT Madras, Shaastra introduced a technologically aided cultural show in the year 2013, capitalizing on the entertainment factor. This techno – cultural show was named Envisage and today it is India’s first and only student organised techno-entertainment show. The projects exhibited by Envisage attract a bunch of not-so-technically oriented guests too. The projects are designed in conformity with the tagline of Envisage – “Technology meets Entertainment”. Alongside conducting the show on 1st day of Shaastra, a number of other interactive projects and video games are also developed and exhibited to a vast crowd at KV Stalls during Shaastra. Over the past few years Envisage has been exploring and presenting projects at various avenues like IIM Bangalore, Anna University and in several other universities as part of Samparks, Publicity event of Shaastra. The coming version marks the entry of Envisage into its very 10th year.
          </div>
        </div>

      </div>
      <div className='container-in'>
        <div className="env-games-heading">
          GAMEDEV
        </div>
        <div className='env-games-container'>
          <img src={games} alt="" className='env-img' />
          <p className="env-games-content">
            This vertical is involved in creating video games from scratch and are displayed at KV stalls during Shaastra as a part of our Tech-Exhibition. We also compete in a lot of entertaining game jam sessions and conduct game development workshops as a team to show the entertaining aspect of game development to others.
          </p>

        </div>
        <div className='cont-corousal'>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={3}
            navigation
            // autoplay={{ delay: 2500, disableOnInteraction: false }}
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
            <SwiperSlide>
              <div class="cards-envisage">
                <div class="card-img env-img1"></div>
                <h2 class="env-title">Robbery Rush</h2>
                <p class="quotes">A Two phase game in which a robber is chased by a police and he has to evade
                  obstacles as the police chases him. In the second phase he locks himself inside a
                  house
                </p>

              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="cards-envisage">
                <div class="card-img env-img2"></div>
                <h2 class="env-title">Robbery Rush</h2>
                <p class="quotes">and has to find the safe and loot it and escape through the back door before
                  the police break inside, after which the first phase repeats and so on
                </p>
                {/* <a href="diary.html" class="c" target="_blank">EXPLORE</a> */}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="cards-envisage">
                <div class="card-img env-img3"></div>
                <h2 class="env-title">Deviant</h2>
                <p class="quotes">An unique AR experience.Wake up.You've been chosen.Join your robot companion
                  in an augmented reality adventure like no other.
                </p>
                {/* <a href="diary.html" class="c" target="_blank">EXPLORE</a> */}
              </div>
            </SwiperSlide>
            {/* <SwiperSlide>
              <div class="cards-envisage">
                <div class="card-img env-img4"></div>
                <h2 class="env-title">DAIRY</h2>
                <p class="quotes">"Nothing soothes an upset Indian like dairy products."</p>
              </div>
            </SwiperSlide> */}
            <SwiperSlide>
              <div class="cards-envisage">
                <div class="card-img env-img5"></div>
                <h2 class="env-title">Reboot</h2>
                <p class="quotes">It's a 3D space shooter game with three different environments, engaging storyline
                  and procedurally generated terrains targeted for PC's. A prototype for a
                  CVI_Perspective controller was integrated with it. It allows complete touch-less
                  gameplay where the player can control 6 degrees of freedom
                </p>
                {/* <a href="diary.html" class="c" target="_blank">EXPLORE</a> */}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="cards-envisage">
                <div class="card-img env-img6"></div>
                <h2 class="env-title">Reboot</h2>
                <p class="quotes">with head movements
                  and other controls through hand gestures implemented using computer vision. Game
                  and controller was developed completely from scratch with some open source and
                  assets resources in unity and python respectively.
                </p>
                {/* <a href="diary.html" class="c" target="_blank">EXPLORE</a> */}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>



        <div className="env-ambience-heading">
          TECH AMBIENCE
        </div>
        <div className="env-ambience">
          <img src={games} alt="" className='env-img' />
          <p className="env-games-content">
            This vertical comprises interactive projects which are presented at KV grounds during Shaastra as a part of tech- exhibition of Envisage.
          </p>
        </div>
        <div className='cont-corousal'>
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
            <SwiperSlide>
              <div class="cards-envisage">
                <div class="card-img env-img7"></div>
                <h2 class="env-title">AR Painting</h2>
                <p class="quotes">Into making gestures to meaningful actions? AR painting does that.It understands our hand gestures  by observing it via a camera and allows us to draw sketches.With further improvements, it can be deployed for teaching purposes and more importantly Entertainment</p>
                {/* <a href="diary.html" class="c" target="_blank">EXPLORE</a> */}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="cards-envisage">
                <div class="card-img env-img8"></div>
                <h2 class="env-title">AR Painting</h2>
                <p class="quotes">AR painter was created using AI. Given the real time webcam data, this paint-like python application uses OpenCV library to track an object-of-interest (like the fingers of your hand).</p>
                {/* <a href="diary.html" class="c" target="_blank">EXPLORE</a> */}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="cards-envisage">
                <div class="card-img env-img9"></div>
                <h2 class="env-title">FaceAI bot</h2>
                <p class="quotes" style={{ "overflow": "scroll" }}>Face AI bot is the humanoid version of Alexa. The bot is capable of face detection and speech recognition. This way the bot can interact with different persons and recognize each person.
                  The 3D printed face of the bot resembling Marvel's iron man has also the ability to move its face and jaw exactly like humans!. </p>
                {/* <a href="diary.html" class="c" target="_blank">EXPLORE</a> */}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="cards-envisage">
                <div class="card-img env-img10"></div>
                <h2 class="env-title">XY Plotter</h2>
                <p class="quotes">
                  Ever felt like drawing an image without your hands? Yes. It's possible with an XY
                  plotter that draws images using the  XY - coordinate system. All we have to do is
                  upload the image that is to be drawn and let the XY plotter do its job to get a good
                  drawing of the image.
                </p>
                {/* <a href="diary.html" class="c" target="_blank">EXPLORE</a> */}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="cards-envisage">
                <div class="card-img env-img11"></div>
                <h2 class="env-title">XY Plotter</h2>
                <p class="quotes">It uses motor drivers to control the stepper motors to move
                  the pen/pencil to draw. With further improvements, it can even fill colors in the
                  sketch that is drawn from an image.
                </p>
                {/* <a href="diary.html" class="c" target="_blank">EXPLORE</a> */}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="env-shows-heading">
          SHOWS
        </div>
        <div className="env-shows">
          <img src={games} alt="" className='env-img' />
          <p className="env-games-content">This vertical comprises large scale projects which are presented in the Envisage show, which is organized on the first day of Shaastra. This is the first and only student-run techno-entertainment show in India and witnessed by an audience of around 5000.</p>
        </div>
        <div className='cont-corousal'>
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
            <SwiperSlide>
              <div class="cards-envisage">
                <div class="card-img env-img12"></div>
                <h2 class="env-title">Infinity Dodecahedron</h2>
                <p class="quotes">It gives the user the experience of living in a 3D space using the 3D effects generated by  multiple LEDs to outline a complex and perfect spiral area. It is the 3D model of 12 faces, which shows the infinite reflection of the LED light. </p>
                {/* <a href="diary.html" class="c" target="_blank">EXPLORE</a> */}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="cards-envisage">
                <div class="card-img env-img13"></div>
                <h2 class="env-title">Kinect DJ</h2>
                <p class="quotes">As the name implies, Virtual Dj with Kinect focuses on building a virtual DJ atmosphere integrating Microsoft kinect as a controller and unity3d as a platform to generate spectacular images.</p>
                {/* <a href="diary.html" class="c" target="_blank">EXPLORE</a> */}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="cards-envisage">
                <div class="card-img env-img14"></div>
                <h2 class="env-title">Kinect DJ</h2>
                <p class="quotes">To create the DJ, we utilized Unity 3D software and Kinect. Unity is also used to create an avatar that resembles our mirror appearance. Kinect has been used to create this motion of the mirror image.</p>
                {/* <a href="diary.html" class="c" target="_blank">EXPLORE</a> */}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="cards-envisage">
                <div class="card-img env-img15"></div>
                <h2 class="env-title">LED Mirror</h2>
                <p class="quotes">Let's change the traditional mirror, how about a pixelated one. This project builds
                  an interactive pixelated mirror from LEDs. This will include looking from camera and
                  capturing face, enhancing the expressions and then encoding them so that it can be
                  displayed in the “mirror”.
                </p>
                {/* <a href="diary.html" class="c" target="_blank">EXPLORE</a> */}
              </div>
            </SwiperSlide>

          </Swiper>
        </div>
      </div>
      <Footer />
    </body>
  )
}

export default Envisage