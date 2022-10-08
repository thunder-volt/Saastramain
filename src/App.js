import './App.css';
import React from 'react';
import i1 from '../src/Images/i1.png';
import i3 from '../src/Images/i2.png';
import i2 from '../src/Images/i3.png';
import i4 from '../src/Images/i4.png';
import i5 from '../src/Images/i5.png';
import i6 from '../src/Images/i6.png';
import i7 from '../src/Images/i7.png';
import i8 from '../src/Images/i8.png';

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
        {/* <h3>About Us</h3> */}
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
          <div>
            <div className="Wrapper1">
              <div className="Content1">
            <div className='img-text1'>
              <h1>Vintage Car Exhibitions</h1>
             <p>Shaastra 2016 unveiled the spectacular technological advancements in automobile history with its very own Vintage Car Exhibition in collaboration with the Madras Heritage Motoring Club.
             Presented automobiles such as Austin 8, 1952 Topolino, Morris 1000, Morris 8, which have been the marvels of technology bringing about a revolution in the automobile.</p>
            </div>
              </div>
            </div>
          </div>
          <div className='main-caption1'>
            <div className='caption11'>2016</div>
            <div className='caption21'>Vintage Car Exhibition</div>
          </div>
        </div>

        </div>
        <div className='pe-secondbox'>
        <div>
            <div className="Wrapper2">
              <div className="Content2">
            <div className='img-text2'>
              <h1>NAO: Autonomous Humanoid Robot</h1>
              <p>Manav: India's first 3D printed humanoid robot was developed by Diwakar Vaish of A-SET training institutes.</p>
            </div>
              </div>
            </div>
          </div>
          <div className='main-caption2'>
            <div className='caption12'>2017</div>
            <div className='caption22'>NAO: Autonomous Humanoid Robot</div>
          </div>
        </div>
        <div className='pe-thirdbox'>
        <div>
            <div className="Wrapper3">
              <div className="Content3">
            <div className='img-text3'>
              <h1>Defence and Aerospace models from ISRO</h1>
              <p>ISRO - GSLV and PSLV models were exhibited at Shaastra Exhibitions.</p>
            </div>
              </div>
            </div>
          </div>
          <div className='main-caption3'>
            <div className='caption13'>2018</div>
            <div className='caption23'>Defence & Aerospace models from ISRO</div>
          </div>
        </div>
        <div className='pe-fourthbox'>
        <div>
            <div className="Wrapper4">
              <div className="Content4">
            <div className='img-text4'>
              <h1>Bike Expo</h1>
              <p>Shaastra 2018 unveiled the spectacular technological advancements in motorcycle history with its Bike Expo.</p>
            </div>
              </div>
            </div>
          </div>
          <div className='main-caption4'>
            <div className='caption14'>2018</div>
            <div className='caption24'>Bike Expo</div>
          </div>
        </div>
        </div>
        <div className='pe-fifthbox'>
        <div>
            <div className="Wrapper5">
              <div className="Content5">
            <div className='img-text5'>
              <h1>International Expo</h1>
              <p>Shaastra for the first time ever, presents International Exhibitions, in association with the US Consulate General of Chennai. The International Exhibits was on three broad perspectives – Academics, Research and Business.</p>
            </div>
              </div>
            </div>
          </div>
          <div className='main-caption5'>
            <div className='caption15'>2019</div>
            <div className='caption25'>International Expo</div>
          </div>
        </div>
        <div className='pe-sixthbox'>
        <div>
            <div className="Wrapper6">
              <div className="Content6">
            <div className='img-text6'>
              <h1>Defence Expo</h1>
              <p>The Defence Expo was an exhibition of the products of nascent defence technology start-ups,established manufacturers,Defence PSUs and the Indian Armed Forces.It was conducted over the course of the 4 days of Shaastra 2020. The Expo provided exposure to Defence Technology for the audience.</p>
            </div>
              </div>
            </div>
          </div>
          <div className='main-caption6'>
            <div className='caption16'>2020</div>
            <div className='caption26'>Defence Expo</div>
          </div>
        </div>
      </div>
    // </div>
  );
}

export default App;