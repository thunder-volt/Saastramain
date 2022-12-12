import React from 'react'
// import Carausal from '../components/Carousal'
import '../styles/env-styles.css'
import games from '../Images/games-logo.jpeg'
import Coreui from './Coreui'
// import Antd from './Antd'
const Envisage = () => {
  return (
    <>
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
          GAMES
        </div>
        <div className='env-games-container'>
          <img src={games} alt="" className='env-img' />
          <p className="env-games-content">
            This vertical is involved in creating video games from scratch and are displayed at KV stalls during Shaastra as a part of our Tech-Exhibition. We also compete in a lot of entertaining game jam sessions and conduct game development workshops as a team to show the entertaining aspect of game development to others.
          </p>

        </div>
        <div className='cont-corousal'>
          <Coreui />
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
          <Coreui />
        </div>

        <div className="env-shows-heading">
          SHOWS
        </div>
        <div className="env-shows">
          <img src={games} alt="" className='env-img' />
          <p className="env-games-content">This vertical comprises large scale projects which are presented in the Envisage show, which is organized on the first day of Shaastra. This is the first and only student-run techno-entertainment show in India and witnessed by an audience of around 5000.</p>
        </div>
        <div className='cont-corousal'>
          <Coreui />
        </div>
      </div>
    </>
  )
}

export default Envisage