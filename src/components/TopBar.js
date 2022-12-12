import * as React from "react";
import Logo from"./../images/23_white logo-02.png";
import "./../styles/TopBar.css";
// import {useHistory} from 'react-router-dom'
import { FaUserCircle } from "react-icons/fa";


const TopBar = () => {

   // let user= JSON.parse(localStorage.getItem('user-info'))
   // const history=useHistory();
   
   // const logOut = () => {
   //    localStorage.clear();
   //    history.push('./')
   // }

   return(
      <section className="topBar">
         <img className="logoTop" src={Logo} alt="Logo"/>
         <div className="account">
            {
               localStorage.getItem('user-info')?
               <>
               <a className="logout" href="./">Logout</a>
               <a className="profile" href="./"><FaUserCircle size={30}/></a>
               </>
               :
               <>
               <a className="login" href="./">Login</a>
               <a className="signup" href="./">Signup</a>
               </>
            }
         </div>
      </section>
 );
};
export default TopBar;