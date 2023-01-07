import '../App.css';
import Logo from './Logo';
import Square from './Square';
import '../styles.css';
import React, { useState, useEffect } from 'react';
import Circle from './Circles';
import Events from './Events'
import Speakers from './Speakers'
import BlackScreen from './BlackScreen';
import Spiral from './Spiral';
import Countdown from './Countdownpage';
import About from './About';
import Theme from './Theme';
import Footer from './Footerfirst'
import NavBar from '../navigation/NavBar.js'
import TopBar from './TopBar'

const Homepage=()=> {
  
  const [cpCount, setCpCount]=useState(1);
  // const [checkPoint, setCheckPoint]=useState([0,7480,14480,21480,30580,37480,44480]);
  const [checkPoint, setCheckPoint]=useState([0,1270,2980,4980,6980,8980]);
  const [depth, setDepth]=useState(checkPoint[cpCount]);
  const [envStyle, setEnvStyle]=useState({

    height: '100vh',
    width: '100vw',
    transition: '5s',
    transformStyle: 'preserve-3d',
    transform: 'translateZ('+checkPoint[cpCount]+')',
    
 });
 

 
 


   const handleNavigationForward = (e) => {
     
    
    if (cpCount<=7 && cpCount>-1)
    {
          setCpCount(cpCount+1);
          console.log(cpCount);

          setEnvStyle({

            height: '100vh',
            width: '100vw',
            transition: '5s',
            transformStyle: 'preserve-3d',
            transform: 'translateZ('+checkPoint[cpCount]+'px)',
            
          });
    }
  };

  const handleNavigationBackward = (e) => {
    if (cpCount > -1 && cpCount <= 7) {
      setCpCount(cpCount - 1);
      console.log(cpCount);

      setEnvStyle({
        height: "100vh",
        width: "100vw",
        transition: "5s",
        transformStyle: "preserve-3d",
        transform: "translateZ(" + checkPoint[cpCount] + "px)",
      });
    }
  };

  return (
    <div className="App home">
      <TopBar />
      <NavBar />
      <div className='uni'>
          
          <div className='control-btns'>
          <div className='forward-btn' onClick={(e)=>handleNavigationForward(e)}></div>
          {/* <div className='back-btn' onClick={(e)=>handleNavigationBackward(e)}>back</div> */}
          </div>
          <div className='text-phrase' onClick={()=>window.open("./Workshops")}>
            <h3>Enroll for workshops now!</h3>
          </div>
        <div className='env' style={envStyle} >
          
          
          {/* <Logo pos={0}/> */}

          <Spiral colour={"#ff0579"} colour2={"#fee"} pos={0} />

          {/* <Circle colour={'#fee'} colour2={'#fee'} pos={0}/> */}



          {/* <Theme pos={-7500}/> */}
          {/* <Theme pos={-1290}/> */}
          
          <Theme pos={-1290}/>
          {/* <Spiral colour={'#ff0579'} colour2={'#fee'} pos={-500} /> */}
          {/* <Square colour={'#fee'} colour2={'#fee'} pos={-500}/> */}


          {/* <Circle colour={'#fee'} colour2={'#fee'} pos={-9750}/> */}

          {/* <Countdown pos={-14500}/> */}
          {/* <Countdown pos={-8290}/> */}
          {/* <Countdown pos={-930}/> */}
          <Countdown pos={-3000}/>
          {/* <Square colour={'#fee'} colour2={'#fee'} pos={-17000}/> */}
          {/* <Square colour={'#fee'} colour2={'#fee'} pos={-2000}/> */}
          {/* <About pos={-21500}/> */}
          <About pos={-5000}/>

          {/* <Spiral colour={'#ff0579'} colour2={'#fee'} pos={-23000} /> */}
          {/* <Circle colour={'#fee'} colour2={'#fee'} pos={-5000}/> */}

          {/* <Speakers pos={-30600}/> */}
          {/* <Speakers pos={-21290}/> */}
          {/* <Square colour={'#fee'} colour2={'#fee'} pos={-5000}/> */}
          <Speakers pos={-7000}/>
          
          {/* <Events pos={-37500}/> */}
          {/* <Events pos={-28190}/> */}
          {/* <Square colour={'#fee'} colour2={'#fee'} pos={-7000}/> */}
          <Events pos={-9000}/>

          {/* <Footer pos={-44500}/> */}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
