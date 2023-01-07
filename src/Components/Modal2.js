import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;



const Modal2Wrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: linear-gradient(224.52deg, #0B0454 1.63%, #7E10B3 70.6%, rgba(130, 16, 176, 0.88) 90.31%, rgba(162, 17, 156, 0.82) 101.2%);;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const Modal2Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background-size: cover;
`;

const Modal2Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: white;

  p {
    margin-bottom: 1rem;
    padding: 30px;
  }

  button {
    padding: 10px 24px;
    background: linear-gradient(224.52deg, #0B0454 1.63%, #7E10B3 70.6%, rgba(130, 16, 176, 0.88) 90.31%, rgba(162, 17, 156, 0.82) 101.2%);
    color: #fff;
    border: none;
    border-radius: 4px;
  }
`;

const CloseModal2Button = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;


<MdClose color= "white" />


export const Modal2 = ({ showModal2, setShowModal2 }) => {
  const modal2Ref = useRef();

  const animation = useSpring({
    config: {
      duration: 0
    },
    opacity: showModal2 ? 1 : 0,
    transform: showModal2 ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal2 = e => {
    if (modal2Ref.current === e.target) {
      setShowModal2(false);
    }
  };


  return (
    
    <>
    
      {showModal2 ? (
        <Background onClick={closeModal2} ref={modal2Ref}>
          <animated.div style={animation}>
            <Modal2Wrapper showModal2={showModal2}>
              <Modal2Img src={require('./salesscreenshot.png')} alt='tshirt' />
              <Modal2Content>
                <h1>Early Bird Offer! 🥳</h1>
                <p>Get exclusive Shaastra 2023 Merchandise at great deals at sales.shaastra.org!</p>
                 <a href="https://sales.shaastra.org"><button>Buy Now!</button></a>
              </Modal2Content>
              <CloseModal2Button
                aria-label='Close modal'
                onClick={() => setShowModal2(prev => !prev)}
              />
            </Modal2Wrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};
