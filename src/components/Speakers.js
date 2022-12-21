import React from 'react'
import "../styles/speakers.css"
const Speakers = ({pos}) => {
    return (
        <div className='speakers-cont' style={ {
        
            transform: 'translateZ('+pos+'px)',
            
            }}>
            <div className="speaker-heading">Speakers</div>
            <div className=''>

                <div className='speakers-slider'>
                    <span style={{ "--i": 1 }}>
                        <img src="https://media.news9live.com/h-upload/2022/07/11/465349-rnravitngovernor.webp"alt="" />
                        <div className="speakers-content">
                            <div className='speakers-info'>
                            <div className="overlay">
                                <h2>Thiru R. N.Ravi</h2>
                                <h3>Jounalist</h3>
                                <h3>Date of Lecture: 22/01/2023</h3></div>
                            </div>
                        </div>

                    </span>
                    <span style={{ "--i": 2 }}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Dr_M._S._Valiathan.jpeg/220px-Dr_M._S._Valiathan.jpeg" alt="" />
                        <div className="speakers-content">
                            <div className='speakers-info'>
                            <div className="overlay">
                                <h2>Dr. M.S. Valiathan</h2>
                                <h3>Jounalist</h3>
                                <h3>Date of Lecture: 22/01/2023</h3></div>
                            </div>
                        </div>
                    </span>
                    <span style={{ "--i": 3 }}><img src="https://www.pragyan.org/20/home/gl_and_crossfire/rajagopala_chidambaram/rajagopala_chidambaram.jpg" alt="" />
                        <div className="speakers-content">
                            <div className='speakers-info'>
                                <div className="overlay">
                                <h2>Dr. Rajagopala Chidambaram</h2>
                                <h3>Jounalist</h3>
                                <h3>Date of Lecture: 22/01/2023</h3></div>
                            </div>
                        </div>
                    </span>
                    <span style={{ "--i": 4 }}><img src="https://nettv4u.com/imagine/23-05-2017/srinivas-mohan.png" alt="" />
                        <div className="speakers-content">
                            <div className='speakers-info'>
                                <div className="overlay">
                                <h2>Mr. Srinivas Mohan</h2>
                                <h3>Jounalist</h3>
                                <h3>Date of Lecture: 22/01/2023</h3></div>
                            </div>
                        </div>
                    </span>
                    <span style={{ "--i": 5 }}><img src="https://www.indianetzone.com/photos_gallery/65/12_Sivathanu_Pillai.jpg" alt="" />
                        <div className="speakers-content">
                            <div className='speakers-info'>
                            <div className="overlay">
                                <h2>Dr. A. Sivathanu Pillai</h2>
                                <h3>Jounalist</h3>
                                <h3>Date of Lecture: 22/01/2023</h3></div>
                            </div>
                        </div>
                    </span>
                    <span style={{ "--i": 6 }}><img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Montekahuwalia.jpg" alt="" />
                        <div className="speakers-content">
                            <div className='speakers-info'>
                            <div className="overlay">
                                <h2>Dr. Montek Singh Ahluwalia</h2>
                                <h3>Jounalist</h3>
                                <h3>Date of Lecture: 22/01/2023</h3></div>
                            </div>
                        </div></span>
                        <span style={{ "--i": 7 }}><img src="https://pbs.twimg.com/profile_images/1473706332104663048/mYM4x-7Q_400x400.jpg" alt="" />
                        <div className="speakers-content">
                            <div className='speakers-info'>
                            <div className="overlay">
                                <h2>Mrs. Vineeta Singh</h2>
                                <h3>Jounalist</h3>
                                <h3>Date of Lecture: 22/01/2023</h3></div>
                            </div>
                        </div></span>
                </div>
            </div>
            {/* <a href="/events" className='events-btn'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Events
            </a> */}
        </div>
    )
}

export default Speakers;