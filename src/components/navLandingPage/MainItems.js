import {useState} from "react";
import "./../../styles/NavLandingPage.css";
import {FaAngleLeft, FaAngleRight } from "react-icons/fa";
import {DropdownMob} from "./Dropdown";


const MainItemsMob = ({items}) => {

  const [dropdownmob, setDropdownmob] = useState(false);

  return (
    <div className="itemsmob">
      {items.subitems ? (
        <>
          <button className="itemsmob" aria-expanded={dropdownmob ? "true" : "false"}
                onClick={() => setDropdownmob((prev) => !prev)}>
              {items.title}
             {dropdownmob ?<FaAngleLeft size={16} className="dropupmob"/>:<FaAngleRight size={16} className="dropupmob"/>}
          </button>
          <DropdownMob subitemsmob={items.subitems} dropdownmob={dropdownmob}/>
        </>
      ) : (
        <a href={items.url}>{items.title}</a>
      )}
    </div>
  );
}

export {MainItemsMob};