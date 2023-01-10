import React, { useState, useEffect } from 'react';

import "../styles/countdown.css";
import Circle from './Circles';

import imgabout from "../Images/23_white logo-01.png";



const Countdown = ({pos}) => {
    const calculateTimeLeft = () => {
        let difference = +new Date(`1/26/2023 12:00`) - +new Date();
        let timeLeft = { days: 0, hrs: 0, mins: 0, secs: 0 };
    
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hrs: Math.floor((difference / (1000 * 60 * 60)) % 24),
            mins: Math.floor((difference / 1000 / 60) % 60),
            secs: Math.floor((difference / 1000) % 60),
          };
        }
        console.log(difference, timeLeft)
        return timeLeft;
      };
      const [time, setTime] = React.useState
        ({
        days: 0,
        hrs: 0,
        mins: 0,
        secs: 0,
      });
    
      React.useEffect(() => {
        setInterval(() => setTime(calculateTimeLeft()), 1000);
      }, []);
    
   

    return (
      
          <div className="theme-body" style={ {
        
            transform: 'translateZ('+pos+'px)',
            
            }}>   
            {/* <div className='tap-phrase'>
            Tap to see more!
        </div>          */}
                              <h1>COUNTDOWN</h1>

                    <div className="countdown">
            <div className="card">
              <div className="card-top" id="days">
                {time.days}
              </div>
              <div className="card-bottom">
                <p>DAYS</p>
              </div>
            </div>
            <span></span>
            <div className="card">
              <div className="card-top" id="hours">
                {time.hrs}
              </div>
              <div className="card-bottom">
                <p>HOURS</p>
              </div>
            </div>
            <span></span>
            <div className="card">
              <div className="card-top" id="mins">
                {time.mins}
              </div>
              <div className="card-bottom">
                <p>MINS</p>
              </div>
            </div>
            <span></span>
            <div className="card">
              <div className="card-top" id="secs">
                {time.secs}
              </div>
              <div className="card-bottom">
                <p>SECS</p>
              </div>
            </div>
          </div>
                              
                          </div>
                    
     
            
    )
}

export default Countdown