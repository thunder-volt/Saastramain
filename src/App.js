import './App.css';
import React from 'react';
import i1 from '/Users/mr.black/gen web shaastra/etif/src/Images/i1.png';
import i3 from '/Users/mr.black/gen web shaastra/etif/src/Images/i3.png';
import i2 from '/Users/mr.black/gen web shaastra/etif/src/Images/i2.png';

function App() {
  return (
      <div className="container">
        <div className='title'>
          <h1>EXHIBITIONS</h1>
        </div>
        <div className='btn-box'>
          <button className='btn'>Register</button>
        </div>

          <div className='about'>
            <h3>About Us</h3>
            <p>Shaastra Exhibitions is a platform to showcase cutting-edge technology.

Exhibitions provide an opportunity for a large number of buyers and sellers in an industry to interact with each other. They offer an unparalleled and ideal opportunity to showcase innovative products to a broad spectrum of people.
They are responsible for conveying the ideas of the participants from a technologically practical perspective and as well as give the audience a glimpse into the latest developments in technology.</p>
          </div>
          <div className='intro-img'>
            <img src={i1} className='i1' alt='i'></img>
          </div>
  
        <div className='title1'>
          <h1>CURRENT EXHIBITIONS</h1>
        </div>
        <div className='ce-content'>
          <div className='ce-firstbox'>

          <div>
          <div id="Wrapper">
          {/* <div className='main-caption'>
            <div className='caption1'>2016</div>
            <div className='caption2'>Vintage Car Exhibition</div>
          </div> */}
            <div id="Content">
            </div>
          </div>
          </div>
          <div className='main-caption'>
            <div className='caption1'>2016</div>
            <div className='caption2'>Vintage Car Exhibition</div>
          </div>
          </div>
          <div className='ce-secondbox'>

          </div>
          <div className='ce-thirdbox'>

          </div>
        </div>
        <div className='title'>
          <h1>PREVIOUS EXHIBITIONS</h1>
        </div>
        <div className='pe-content'>
          <div className='pe-firstbox'>

          </div>
          <div className='pe-secondbox'>

          </div>
          <div className='pe-thirdbox'>

          </div>
          <div className='pe-fourthbox'>

          </div>
          <div className='pe-fifthbox'>

          </div>
          <div className='pe-sixthbox'>

          </div>
        </div>
      </div>
  );
}

export default App;
