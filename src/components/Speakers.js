import React from 'react'
import "../styles/speakers.css"
const Speakers = () => {
    return (
        <div className='speakers-cont'>
            <div className="speaker-heading">Speakers</div>
            <div className=''>

                <div className='speakers-slider'>
                    <span style={{ "--i": 1 }}>
                        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
                        <div className="speakers-content">
                            <div className='speakers-info'>
                                <h2>Speakers Name</h2>
                                <h3>Jounalist</h3>
                                <h3>Date of Lecture: 22/01/2023</h3>
                            </div>
                        </div>

                    </span>
                    <span style={{ "--i": 2 }}><img src="https://www.whatsappimages.in/wp-content/uploads/2021/07/Top-HD-sad-quotes-for-whatsapp-status-in-hindi-Pics-Images-Download-Free.gif" alt="" />
                        <div className="speakers-content">
                            <div className='speakers-info'>
                                <h2>Speakers Name</h2>
                                <h3>Jounalist</h3>
                                <h3>Date of Lecture: 22/01/2023</h3>
                            </div>
                        </div>
                    </span>
                    <span style={{ "--i": 3 }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgdZpEDslKnjBmPC6dlF6pf9Q2m1o5aMdHwg&usqp=CAU" alt="" />
                        <div className="speakers-content">
                            <div className='speakers-info'>
                                <h2>Speakers Name</h2>
                                <h3>Jounalist</h3>
                                <h3>Date of Lecture: 22/01/2023</h3>
                            </div>
                        </div>
                    </span>
                    <span style={{ "--i": 4 }}><img src="https://static.vecteezy.com/packs/media/vectors/term-bg-1-3d6355ab.jpg" alt="" />
                        <div className="speakers-content">
                            <div className='speakers-info'>
                                <h2>Speakers Name</h2>
                                <h3>Jounalist</h3>
                                <h3>Date of Lecture: 22/01/2023</h3>
                            </div>
                        </div>
                    </span>
                    <span style={{ "--i": 5 }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPdbKdjTNV07Ld2FDo_m37tAYQjNis8VrGVjS8wxHhklcINZXFPybIvNNov-VwYMjzPdg&usqp=CAU" alt="" />
                        <div className="speakers-content">
                            <div className='speakers-info'>
                                <h2>Speakers Name</h2>
                                <h3>Jounalist</h3>
                                <h3>Date of Lecture: 22/01/2023</h3>
                            </div>
                        </div>
                    </span>
                    <span style={{ "--i": 6 }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAd2XziS7czWcS1oK9KMY_R4FAGX4l6ZFdrA&usqp=CAU" alt="" />
                        <div className="speakers-content">
                            <div className='speakers-info'>
                                <h2>Speakers Name</h2>
                                <h3>Jounalist</h3>
                                <h3>Date of Lecture: 22/01/2023</h3>
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

export default Speakers