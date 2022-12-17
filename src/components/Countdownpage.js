import React, { useState, useEffect } from 'react';

import "../styles/countdown.css"
import Circle from './Circles';

import imgabout from "../images/23_white logo-01.png"
import UIkit from 'uikit'


const Countdown = () => {
    const [cpCount, setCpCount]=useState(0);
  const [cp, setCp]=useState([10000,14000]);
  const [depth, setDepth]=useState(cp[cpCount]);
  const [envStyle, setEnvStyle]=useState({

    height: '100vh',
    width: '100vw',
    transition: '10s',
    transformStyle: 'preserve-3d',
    transform: 'translateZ(0px)',
    
 });
   const handleNavigation = (e) => {
    setCpCount(cpCount+1);
    setDepth(cp[cpCount]);
    

     setEnvStyle({

      height: '100vh',
      width: '100vw',
      transition: '5s',
      transformStyle: 'preserve-3d',
      transform: 'translateZ('+depth+'px)',
  
    });

   };

    return (
        <div className='secondsection' onWheel={(e)=>handleNavigation(e)}>
      
      <div className='uni'>
      

          <div class="star-field">
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
          </div>

          <div className='env' style={envStyle} >

          <Circle colour={'#38d7ff'} colour2={'#a3edff'} pos={-15000}/>
          <Circle colour={'#ff0579'} colour2={'#fee'} pos={-15100}/>
          <Circle colour={'#38d7ff'} colour2={'#a3edff'} pos={-15200}/>
          <Circle colour={'#ff0579'} colour2={'#fee'} pos={-15300}/>
          <Circle colour={'#38d7ff'} colour2={'#a3edff'} pos={-15400}/>
          <Circle colour={'#ff0579'} colour2={'#fee'} pos={-15500}/>
          <Circle colour={'#38d7ff'} colour2={'#a3edff'} pos={-16600}/>
          <Circle colour={'#ff0579'} colour2={'#fee'} pos={-15700}/>
          <Circle colour={'#38d7ff'} colour2={'#a3edff'} pos={-15800}/>
          <Circle colour={'#ff0579'} colour2={'#fee'} pos={-15900}/>
          {/* <Circle colour={'#38d7ff'} colour2={'#a3edff'} pos={-11000}/>
          <Circle colour={'#ff0579'} colour2={'#fee'} pos={-11100}/>
          <Circle colour={'#38d7ff'} colour2={'#a3edff'} pos={-11200}/>
          <Circle colour={'#ff0579'} colour2={'#fee'} pos={-11300}/>
          <Circle colour={'#38d7ff'} colour2={'#a3edff'} pos={-11400}/>
          <Circle colour={'#ff0579'} colour2={'#fee'} pos={-11500}/>
          <Circle colour={'#38d7ff'} colour2={'#a3edff'} pos={-11600}/> */}

          <div className="theme-body" style={ {
        
        transform: 'translateZ(-18000px)',
        }}>            
            <img src={imgabout} alt="" className='about-img' />
            
            <div className='countdown'>
                
            <script src="css/uikit.min.css"></script>
            <script src="js/uikit.min.js"></script>
            <script src="js/uikit-icons.min.js"></script>           
                    <div class="uk-grid-small uk-child-width-auto" uk-grid uk-countdown="date: 2023-01-27T16:11:57+00:00">
            <div className='flexcount'>
                <div class="uk-countdown-number uk-countdown-days"></div>
                <div class="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">&nbsp; Days</div>
                <div class="uk-countdown-separator">:</div>
                <div class="uk-countdown-number uk-countdown-hours"></div>
                <div class="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">&nbsp; Hours</div>
                <div class="uk-countdown-separator">:</div>
                <div class="uk-countdown-number uk-countdown-minutes"></div>
                <div class="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">&nbsp; Minutes</div>
                <div class="uk-countdown-separator">:</div>
                <div class="uk-countdown-number uk-countdown-seconds"></div>
                <div class="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">&nbsp; Seconds</div>
            </div>
            
            
        </div>
            </div>
            </div>
           
            </div>
            </div>
            </div>
    )
}

export default Countdown