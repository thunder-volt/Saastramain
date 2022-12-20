import './App.css';
import Logo from './components/Logo';
import Square from './components/Square';
import './styles.css';
import React, { useState, useEffect } from 'react';
import Circle from './components/Circles';
import Dummy from './components/Eventsdummy';
import BlackScreen from './components/BlackScreen';
import Spiral from './components/Spiral';
import Countdown from './components/Countdownpage';
import About from './components/About';
import Theme from './components/Theme';




const App=()=> {


  
  
  const [cpCount, setCpCount]=useState(1);
  const [checkPoint, setCheckPoint]=useState([0,7480,14480,21480,30580,37480,44480]);
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
     
    
     if(cpCount>-1 && cpCount<=7)
    {
          setCpCount(cpCount-1);
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
 









  return (
    <div className="App"  >
      


      
      <div className='uni'>
      

                <div class="star-field">
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
          </div>
          
          <div className='control-btns'>
          <div className='forward-btn' onClick={(e)=>handleNavigationForward(e)}></div>
          <div className='back-btn' onClick={(e)=>handleNavigationBackward(e)}></div>
          </div>

        <div className='env' style={envStyle} >

          
          
          <Logo pos={0}/>

          <Spiral colour={'#ff0579'} colour2={'#fee'} pos={0} />

          <Theme pos={-7500}/>

          <Circle colour={'#fee'} colour2={'#fee'} pos={-9750}/>

          <Countdown pos={-14500}/>

          <Square colour={'#fee'} colour2={'#fee'} pos={-17000}/>

          <About pos={-21500}/>

          <Spiral colour={'#ff0579'} colour2={'#fee'} pos={-23000} />

          <Dummy pos={-30600}/>

          <Circle colour={'#fee'} colour2={'#fee'} pos={-33000}/>

          <Dummy pos={-37500}/>

          <Square colour={'#fee'} colour2={'#fee'} pos={-40000}/>

          <Dummy pos={-44500}/>
         
          

        </div>
      </div>
    </div>
  );
}

export default App;
