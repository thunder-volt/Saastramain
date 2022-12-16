import {useState} from "react";
import "./../../styles/NavBar.css";
import { FaAngleUp, FaAngleDown, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import {Dropdown,DropdownMob} from "./Dropdown";

const MainItems = ({items}) => {

  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="items">
      {items.subitems ? (
        <>
          <button className="items" aria-expanded={dropdown ? "true" : "false"}
                onClick={() => setDropdown((prev) => !prev)}>
             {dropdown ?<FaAngleDown size={16} className="dropup"/>:<FaAngleUp size={16} className="dropup"/>}
            {items.title}
          </button>
          <Dropdown subitems={items.subitems} dropdown={dropdown}/>
        </>
      ) : (
        <a href={items.url}>{items.title}</a>
      )}
    </div>
  );
}


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

export {MainItems,MainItemsMob};