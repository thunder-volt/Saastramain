import React, {useState} from "react";
import Logo from"../../Images/23_white logo-02.png";
import "./../../styles/NavBar.css";
import { items } from '../items';
import {MainItems, MainItemsMob} from "./MainItems";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {

   const [open, setOpen] = useState(false);

    return(
      <div className="navBar">
         {/* <img className="logo" src={Logo} alt="Logo"/> */}
         <nav>
            <ul className="navItems">
               {items.map((items,index) =>{
                  return <MainItems items={items} key={index}/>;
               })}
            </ul>
         </nav>
         <div className="smallNav">
            <button className="menu" aria-expanded={open ? "true" : "false"}
                  onClick={() => setOpen((prev) => !prev)}>
            {open ?<FaTimes size={22} className="cross"/>:<FaBars size={22} className="bar"/>}
            </button>
            {open?
            <div className="menuItems">
               {items.map((items) =>{
                  return <MainItemsMob items={items} key={items.id}/>;
               })}
            </div>
            :""}
         </div>
      </div>
    );
   };
   export default NavBar;