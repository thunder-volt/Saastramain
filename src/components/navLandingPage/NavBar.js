import React, {useState} from "react";
import Logo from"./../../images/logo cropped.png";
import "./../../styles/NavLandingPage.css";
import { items } from './items';
import {MainItemsMob} from "./MainItems";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {

   const [open, setOpen] = useState(false);

    return(
      <div className="navBar">
         <img className="logo" src={Logo} alt="Logo"/>
         <div className="smallNav">
            <button className="menu" aria-expanded={open ? "true" : "false"}
                  onClick={() => setOpen((prev) => !prev)}>
            {open ?<FaTimes size={22} className="cross"/>:<FaBars size={22} className="bar"/>}
            </button>
            {open?
            <div className="menuItems">
               {items.map((items,index) =>{
                  return <MainItemsMob items={items} key={index}/>;
               })}
            </div>
            :""}
         </div>
      </div>
    );
   };
   export default NavBar;