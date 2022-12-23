import * as React from "react";
import Logo from "./shaastra2.png";
import "./../styles/TopBar.css";
import {useNavigate} from 'react-router-dom'
import { FaUserCircle } from "react-icons/fa";

import { useMutation, useQuery, gql } from "@apollo/client";
import {
   ChakraProvider,
   Modal,
   ModalOverlay,
   ModalContent,
   ModalHeader,
   useDisclosure,
   ModalCloseButton,
 } from "@chakra-ui/react";

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
   }

   if (isLogout) {
      var onClose = () => {
         localStorage.clear();
         navigate('/')
      }
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
      var onClose = () => navigate("/")
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
               localStorage.getItem('role')?
               <>
               <p>Hi, {localStorage.getItem('id')}</p>
               <a className="profile-topbar" href="/profile"><FaUserCircle size={30}/></a>
               <a className="logout-topbar" onClick={logOut} href="./">Logout</a>
               </>
               :
               <>
               <a className="login-topbar" href="./login">Login</a>
               <a className="signup-topbar" href="./signup">Signup</a>
               </>
            }
         </div>
      </section>
 );
};
export default TopBar;