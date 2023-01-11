import React, {useState} from "react";
import Logo from"./shaastra2.png";
import "./../styles/TopBar.css";
import {useNavigate} from 'react-router-dom'
import { FaUserCircle,FaAngleUp, FaAngleDown } from "react-icons/fa";
// import { Select } from '@chakra-ui/react';
import { useMutation, useQuery, gql } from "@apollo/client";
import {
  ChakraProvider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  useDisclosure,
  ModalCloseButton,
  background,
} from "@chakra-ui/react";

import Dropdown from 'react-bootstrap/Dropdown';

const LOGOUT = gql`
  mutation Mutation {
    logoutUser
  }
`;

const TopBar = () => {
  const [logout, { data: isLogout, loading, error }] = useMutation(LOGOUT);
  // let user= JSON.parse(localStorage.getItem('role'))
  const navigate = useNavigate();
  
  const logOut = () => {
    logout();
  };
  const [hover, setHover] = useState(false);
  
  if (isLogout) {
   var onClose = () => {
     localStorage.clear();
     navigate("/");
   };
   return (
     <ChakraProvider>
       <Modal isOpen={true} onClose={onClose}>
         <ModalOverlay />
         <ModalContent backgroundColor="white" color="black">
           <ModalHeader>Logged out successfully!</ModalHeader>
           <ModalCloseButton />
         </ModalContent>
       </Modal>
     </ChakraProvider>
   );
 }

    if (error) {
      var onClose = () => navigate("/");
      return (
        <ChakraProvider>
          <Modal isOpen={true} onClose={onClose}>
            <ModalOverlay />
            <ModalContent backgroundColor="red" color="black">
              <ModalHeader>Some Error Occured</ModalHeader>
              <ModalCloseButton />
            </ModalContent>
          </Modal>
        </ChakraProvider>
      );
    }
    

   return(
      <section className="topBar">
         <img className="logoTop" src={Logo} alt="Logo" onClick={()=> window.open("./")}/>
         <div className="account">
            {
               localStorage.getItem('role')? (
              // //  <div className="loggedin">
              // //  <div className="myprofile">
              // //  <p className="id-topbar">Hi, {localStorage.getItem('id')}</p>
              // //  <a className="profile-topbar" href="/profile"><FaUserCircle size={30}/></a>
              // //  </div>
              // //  <div className="logout-topbar"onClick={logOut}>Logout</div>
              // //  </div>
              //  {/* <Select variant="flushed" className="profile-icon" placeholder={<FaUserCircle size={30}/>} icon={<FaAngleDown />} >
              //   <option>
              //   <a className="profile-topbar" href="/profile">My Profile</a>
              //   </option>
              //   <option>
              //   <a className="logout-topbar" onClick={logOut} href="./">Logout</a>
              //   </option>
              //  </Select> */}
              
               <Dropdown>
                <Dropdown.Toggle className="id-topbar" variant="success">
                Hi, {localStorage.getItem('id')} {' '}
             </Dropdown.Toggle><Dropdown.Menu className="loggedin" 
              style={{
                    background: "rgba(255, 255, 255, 0.2)",
                    borderRadius: "4px",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                    backdropFilter: "blur(5px)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    }}>
                 <Dropdown.Item
                  onMouseEnter={()=>{setHover(true);}}
                  onMouseLeave={()=>{setHover(false);}}  
                  style={{fontSize:"15px",
                  ...(hover? {background:"transparent"} : null)}}
                  className="profile-topbar" href="/profile">My Profile</Dropdown.Item>
                 <Dropdown.Item 
                  onMouseEnter={()=>{setHover(true);}}
                  onMouseLeave={()=>{setHover(false);}}  
                  style={{fontSize:"15px",
                  ...(hover? {background:"transparent"} : null)
                }}
                   className="logout-topbar" onClick={logOut}>Logout</Dropdown.Item>
               </Dropdown.Menu> 
                </Dropdown>
               ): (
               <>
               <a className="login-topbar" href="./login">Login</a>
               <a className="signup-topbar" href="./signup">Signup</a>
               </>
            )}
         </div>
      </section>
 );
};
export default TopBar;