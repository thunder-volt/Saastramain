import './App.css';
import Logo from './components/Logo';
import Square from './components/Square';
import './styles.css';
import React, { useState, useEffect } from 'react';
import Circle from './components/Circles';
import BlackScreen from './components/BlackScreen';
import Spiral from './components/Spiral';
import Theme from './components/Theme';
import Countdown from './components/Countdownpage';
// import './styles/theme.css';


const App=()=> {

  
  const [cpCount, setCpCount]=useState(0);
  const [cp, setCp]=useState([10000,13800]);
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
    <div className="App">

      {/* <Theme /> */}
      <Countdown />
      
          
          
          

          
        



          


        </div>
      
  );
}

export default App;
