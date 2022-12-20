import React, { useState, useEffect } from 'react';

import "../styles/countdown.css";
import Circle from './Circles';

import imgabout from "../images/23_white logo-01.png";



const Countdown = ({pos}) => {
    
   

    return (
          <div className="theme-body" style={ {
        
            transform: 'translateZ('+pos+'px)',
            
            }}>            
                    {/* <img src={imgabout} alt="" className='about-img' /> */}
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
                    
     
            
    )
}

export default Countdown