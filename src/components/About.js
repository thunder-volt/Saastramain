import React from 'react'
import "../styles/about.css"
import imgabout from "../images/23_white logo-01.png"
const About = () => {
    return (
        <div className="about-body">
            <div className="about-wrapper">
            <img src={imgabout} alt="" className='about-img' />

                <div className="about-title">
                    <h1>About Shaastra</h1>
                </div>
                <div className="about">

                    <article className='about-article'>
                        <p>
                            Shaastra is the annual technical festival of the Indian Institute of Technology Madras (IITM), Chennai, India. The Sanskrit word ‘Shaastra’ means science and the festival accordingly consists of various engineering, science, and technology competitions, summits, lectures, video conferences, exhibitions, demonstrations and workshops. The festival is traditionally held over four days and four nights during the first week of January. It has so far seen twenty-one editions, having started in its current avatar in the year 2000. Shaastra is entirely student-managed and is the first such event in the world to be ISO 9001:2015 certified.

                        </p>
                        {/* <div className="about-btn"><a href="/speakers">Speakers</a></div> */}
                        </article>

                </div>
            </div>

        </div>
    )
}

export default About