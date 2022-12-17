import React from 'react'
import About from './About';
import Countdown from './Countdown';
import Events from './Events';
import Speakers from './Speakers';
import Footer from './Footer';
import imgabout from "../images/23_white logo-01.png"
import Theme from './Theme';
const Home = () => {
    return (
        <div className='Home'>
            
            <Theme />
            <Countdown />
            <About />
            <Events/>
            <Speakers />
            <Footer />
        </div>
    )
}

export default Home