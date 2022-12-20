import * as React from "react";
import Logo from"./../Images/23_white logo-02.png";
import "./../styles/TopBar.css";
import {useNavigate} from 'react-router-dom'
import { FaUserCircle } from "react-icons/fa";


const TopBar = () => {

   let user= JSON.parse(localStorage.getItem('user-info'))
   const history=useNavigate();
   
   const logOut = () => {
      localStorage.clear();
      history.push('./')
   }

   return(
      <section className="topBar">
         <img className="logoTop" src={Logo} alt="Logo"/>
         <div className="account">
            {
               localStorage.getItem('user-info')?
               <>
               <a className="logout-topbar" onClick={logOut} href="./">Logout</a>
               <a className="profile-topbar" href="./Profile"><FaUserCircle size={30}/></a>
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