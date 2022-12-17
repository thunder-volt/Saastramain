import "../styles/theme.css"
import imgabout from "../images/23_white logo-01.png"
import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const Spiral = ({colour, colour2, pos, }) =>
{

    return(

        <>
            <div className="spiral"style={ {
                transform: 'translateZ('+pos+')',
                
                
            }}>
            <div className="spiral-sqr"><div style={ {
                borderColor: colour2,
                boxShadow: '0 0px 100px, 0 0 2px, 0 0 5vh '+colour+', 0 0 0.5em '+colour+', 0 0 1em '+colour+', 0 10px 3px rgb(0, 0, 0)',
                rotate:'90deg',
                
            }}></div></div>
            
            <div className="spiral-sqr"><div style={ {
                borderColor: colour2,
                boxShadow: '0 0px 100px, 0 0 2px, 0 0 5vh '+colour+', 0 0 0.5em '+colour+', 0 0 1em '+colour+', 0 10px 3px rgb(0, 0, 0)',
                rotate:'85deg',
                
            }}></div></div>
            <div className="spiral-sqr"><div style={ {
                borderColor: colour2,
                boxShadow: '0 0px 100px, 0 0 2px, 0 0 5vh '+colour+', 0 0 0.5em '+colour+', 0 0 1em '+colour+', 0 10px 3px rgb(0, 0, 0)',
                rotate:'80deg',
                
            }}></div></div>
            <div className="spiral-sqr"><div style={ {
                borderColor: colour2,
                boxShadow: '0 0px 100px, 0 0 2px, 0 0 5vh '+colour+', 0 0 0.5em '+colour+', 0 0 1em '+colour+', 0 10px 3px rgb(0, 0, 0)',
                rotate:'75deg',
                
            }}></div></div>
            <div className="spiral-sqr"><div style={ {
                borderColor: colour2,
                boxShadow: '0 0px 100px, 0 0 2px, 0 0 5vh '+colour+', 0 0 0.5em '+colour+', 0 0 1em '+colour+', 0 10px 3px rgb(0, 0, 0)',
                rotate:'70deg',
                
            }}></div></div>
            <div className="spiral-sqr"><div style={ {
                borderColor: colour2,
                boxShadow: '0 0px 100px, 0 0 2px, 0 0 5vh '+colour+', 0 0 0.5em '+colour+', 0 0 1em '+colour+', 0 10px 3px rgb(0, 0, 0)',
                rotate:'65deg',
                
            }}></div></div>
            <div className="spiral-sqr"><div style={ {
                borderColor: colour2,
                boxShadow: '0 0px 100px, 0 0 2px, 0 0 5vh '+colour+', 0 0 0.5em '+colour+', 0 0 1em '+colour+', 0 10px 3px rgb(0, 0, 0)',
                rotate:'60deg',
                
            }}></div></div>
            <div className="spiral-sqr"><div style={ {
                borderColor: colour2,
                boxShadow: '0 0px 100px, 0 0 2px, 0 0 5vh '+colour+', 0 0 0.5em '+colour+', 0 0 1em '+colour+', 0 10px 3px rgb(0, 0, 0)',
                rotate:'55deg',
                
            }}></div></div>
            <div className="spiral-sqr"><div style={ {
                borderColor: colour2,
                boxShadow: '0 0px 100px, 0 0 2px, 0 0 5vh '+colour+', 0 0 0.5em '+colour+', 0 0 1em '+colour+', 0 10px 3px rgb(0, 0, 0)',
                rotate:'50deg',
                
            }}></div></div>
            <div className="spiral-sqr"><div style={ {
                borderColor: colour2,
                boxShadow: '0 0px 100px, 0 0 2px, 0 0 5vh '+colour+', 0 0 0.5em '+colour+', 0 0 1em '+colour+', 0 10px 3px rgb(0, 0, 0)',
                rotate:'45deg',
                
            }}></div></div>
            <div className="spiral-sqr"><div style={ {
                borderColor: colour2,
                boxShadow: '0 0px 100px, 0 0 2px, 0 0 5vh '+colour+', 0 0 0.5em '+colour+', 0 0 1em '+colour+', 0 10px 3px rgb(0, 0, 0)',
                rotate:'40deg',
                
            }}></div></div>
            
            <div className="spiral-sqr"><div style={ {
                borderColor: colour2,
                boxShadow: '0 0px 100px, 0 0 2px, 0 0 5vh '+colour+', 0 0 0.5em '+colour+', 0 0 1em '+colour+', 0 10px 3px rgb(0, 0, 0)',
                rotate:'35deg',
                
            }}></div></div>
            <div className="spiral-sqr"><div style={ {
                borderColor: colour2,
                boxShadow: '0 0px 100px, 0 0 2px, 0 0 5vh '+colour+', 0 0 0.5em '+colour+', 0 0 1em '+colour+', 0 10px 3px rgb(0, 0, 0)',
                rotate:'30deg',
                
            }}></div></div>
            <div className="spiral-sqr"><div style={ {
                borderColor: colour2,
                boxShadow: '0 0px 100px, 0 0 2px, 0 0 5vh '+colour+', 0 0 0.5em '+colour+', 0 0 1em '+colour+', 0 10px 3px rgb(0, 0, 0)',
                rotate:'25deg',
                
            }}></div></div>
            <div className="spiral-sqr"><div style={ {
                borderColor: colour2,
                boxShadow: '0 0px 100px, 0 0 2px, 0 0 5vh '+colour+', 0 0 0.5em '+colour+', 0 0 1em '+colour+', 0 10px 3px rgb(0, 0, 0)',
                rotate:'20deg',
                
            }}></div></div>
            <div className="spiral-sqr"><div style={ {
                borderColor: colour2,
                boxShadow: '0 0px 100px, 0 0 2px, 0 0 5vh '+colour+', 0 0 0.5em '+colour+', 0 0 1em '+colour+', 0 10px 3px rgb(0, 0, 0)',
                rotate:'15deg',
                
            }}></div></div>
            <div className="spiral-sqr"><div style={ {
                borderColor: colour2,
                boxShadow: '0 0px 100px, 0 0 2px, 0 0 5vh '+colour+', 0 0 0.5em '+colour+', 0 0 1em '+colour+', 0 10px 3px rgb(0, 0, 0)',
                rotate:'10deg',
                
            }}></div></div>
            <div className="spiral-sqr"><div style={ {
                borderColor: colour2,
                boxShadow: '0 0px 100px, 0 0 2px, 0 0 5vh '+colour+', 0 0 0.5em '+colour+', 0 0 1em '+colour+', 0 10px 3px rgb(0, 0, 0)',
                rotate:'5deg',
                
            }}></div></div>
            <div className="spiral-sqr"><div style={ {
                borderColor: colour2,
                boxShadow: '0 0px 100px, 0 0 2px, 0 0 5vh '+colour+', 0 0 0.5em '+colour+', 0 0 1em '+colour+', 0 10px 3px rgb(0, 0, 0)',
                rotate:'0deg',
                
            }}></div></div>
            

            <div className="spiral-sqr"><div style={ {
                borderColor: colour2,
                boxShadow: '0 0px 100px, 0 0 2px, 0 0 5vh '+colour+', 0 0 0.5em '+colour+', 0 0 1em '+colour+', 0 10px 3px rgb(0, 0, 0)',
                rotate:'90deg',
                
            }}></div></div>
            
            <div className="spiral-sqr"><div style={ {
                borderColor: colour2,
                boxShadow: '0 0px 100px, 0 0 2px, 0 0 5vh '+colour+', 0 0 0.5em '+colour+', 0 0 1em '+colour+', 0 10px 3px rgb(0, 0, 0)',
                rotate:'85deg',
                
            }}></div></div>
            <div className="spiral-sqr"><div style={ {
                borderColor: colour2,
                boxShadow: '0 0px 100px, 0 0 2px, 0 0 5vh '+colour+', 0 0 0.5em '+colour+', 0 0 1em '+colour+', 0 10px 3px rgb(0, 0, 0)',
                rotate:'80deg',
                
            }}></div></div>
            <div className="spiral-sqr"><div style={ {
                borderColor: colour2,
                boxShadow: '0 0px 100px, 0 0 2px, 0 0 5vh '+colour+', 0 0 0.5em '+colour+', 0 0 1em '+colour+', 0 10px 3px rgb(0, 0, 0)',
                rotate:'75deg',
                
            }}></div></div>
            <div className="spiral-sqr"><div style={ {
                borderColor: colour2,
                boxShadow: '0 0px 100px, 0 0 2px, 0 0 5vh '+colour+', 0 0 0.5em '+colour+', 0 0 1em '+colour+', 0 10px 3px rgb(0, 0, 0)',
                rotate:'70deg',
                
            }}></div></div>
            <div className="spiral-sqr"><div style={ {
                borderColor: colour2,
                boxShadow: '0 0px 100px, 0 0 2px, 0 0 5vh '+colour+', 0 0 0.5em '+colour+', 0 0 1em '+colour+', 0 10px 3px rgb(0, 0, 0)',
                rotate:'65deg',
                
            }}></div></div>
            <div className="spiral-sqr"><div style={ {
                borderColor: colour2,
                boxShadow: '0 0px 100px, 0 0 2px, 0 0 5vh '+colour+', 0 0 0.5em '+colour+', 0 0 1em '+colour+', 0 10px 3px rgb(0, 0, 0)',
                rotate:'60deg',
                
            }}></div></div>
            <div className="spiral-sqr"><div style={ {
                borderColor: colour2,
                boxShadow: '0 0px 100px, 0 0 2px, 0 0 5vh '+colour+', 0 0 0.5em '+colour+', 0 0 1em '+colour+', 0 10px 3px rgb(0, 0, 0)',
                rotate:'55deg',
                
            }}></div></div>
            <div className="spiral-sqr"><div style={ {
                borderColor: colour2,
                boxShadow: '0 0px 100px, 0 0 2px, 0 0 5vh '+colour+', 0 0 0.5em '+colour+', 0 0 1em '+colour+', 0 10px 3px rgb(0, 0, 0)',
                rotate:'50deg',
                
            }}></div></div>
            <div className="spiral-sqr"><div style={ {
                borderColor: colour2,
                boxShadow: '0 0px 100px, 0 0 2px, 0 0 5vh '+colour+', 0 0 0.5em '+colour+', 0 0 1em '+colour+', 0 10px 3px rgb(0, 0, 0)',
                rotate:'45deg',
                
            }}></div></div>
            <div className="spiral-sqr"><div style={ {
                borderColor: colour2,
                boxShadow: '0 0px 100px, 0 0 2px, 0 0 5vh '+colour+', 0 0 0.5em '+colour+', 0 0 1em '+colour+', 0 10px 3px rgb(0, 0, 0)',
                rotate:'40deg',
                
            }}></div></div>
            
            <div className="spiral-sqr"><div style={ {
                borderColor: colour2,
                boxShadow: '0 0px 100px, 0 0 2px, 0 0 5vh '+colour+', 0 0 0.5em '+colour+', 0 0 1em '+colour+', 0 10px 3px rgb(0, 0, 0)',
                rotate:'35deg',
                
            }}></div></div>
            <div className="spiral-sqr"><div style={ {
                borderColor: colour2,
                boxShadow: '0 0px 100px, 0 0 2px, 0 0 5vh '+colour+', 0 0 0.5em '+colour+', 0 0 1em '+colour+', 0 10px 3px rgb(0, 0, 0)',
                rotate:'30deg',
                
            }}></div></div>
            <div className="spiral-sqr"><div style={ {
                borderColor: colour2,
                boxShadow: '0 0px 100px, 0 0 2px, 0 0 5vh '+colour+', 0 0 0.5em '+colour+', 0 0 1em '+colour+', 0 10px 3px rgb(0, 0, 0)',
                rotate:'25deg',
                
            }}></div></div>
            <div className="spiral-sqr"><div style={ {
                borderColor: colour2,
                boxShadow: '0 0px 100px, 0 0 2px, 0 0 5vh '+colour+', 0 0 0.5em '+colour+', 0 0 1em '+colour+', 0 10px 3px rgb(0, 0, 0)',
                rotate:'20deg',
                
            }}></div></div>
            <div className="spiral-sqr"><div style={ {
                borderColor: colour2,
                boxShadow: '0 0px 100px, 0 0 2px, 0 0 5vh '+colour+', 0 0 0.5em '+colour+', 0 0 1em '+colour+', 0 10px 3px rgb(0, 0, 0)',
                rotate:'15deg',
                
            }}></div></div>
            <div className="spiral-sqr"><div style={ {
                borderColor: colour2,
                boxShadow: '0 0px 100px, 0 0 2px, 0 0 5vh '+colour+', 0 0 0.5em '+colour+', 0 0 1em '+colour+', 0 10px 3px rgb(0, 0, 0)',
                rotate:'10deg',
                
            }}></div></div>
            <div className="spiral-sqr"><div style={ {
                borderColor: colour2,
                boxShadow: '0 0px 100px, 0 0 2px, 0 0 5vh '+colour+', 0 0 0.5em '+colour+', 0 0 1em '+colour+', 0 10px 3px rgb(0, 0, 0)',
                rotate:'5deg',
                
            }}></div></div>
            <div className="spiral-sqr"><div style={ {
                borderColor: colour2,
                boxShadow: '0 0px 100px, 0 0 2px, 0 0 5vh '+colour+', 0 0 0.5em '+colour+', 0 0 1em '+colour+', 0 10px 3px rgb(0, 0, 0)',
                rotate:'0deg',
                
            }}></div></div>
            
            

            </div>
            

        </>

    );
};


const Theme = ({pos}) => {
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
        <div className='firstsection' onWheel={(e)=>handleNavigation(e)}>
      
      <div className='uni'>
      

          <div class="star-field">
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
          </div>

          <div className='env' style={envStyle} >

          
          <Logo/>
          <Spiral colour={'#ff0579'} colour2={'#fee'} pos={'0px'} />
          <div className="theme-body" style={ {
        
        transform: 'translateZ(-14000px)',
        
        }}>
        <div className="theme-wrapper" style={ {
            transform: 'translateZ(90px)',               
            
            }}>
            <img src={imgabout} alt="" className='about-img' />
            <h2> P R E S E N T S</h2>
            <div class="heading">
            <h1 class="neon">SPECTRAL SPLENDORS</h1>
            </div>               
        </div>
          
          </div>
        </div>
        </div>
        </div>       
    )
}

export default Theme