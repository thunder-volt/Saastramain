import {useEffect,useRef,useState} from "react";
import "./../../styles/NavBar.css";
import { FaAngleUp, FaAngleDown, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import {Dropdown,DropdownMob} from "./Dropdown";

const MainItems = ({items}) => {

  const [dropdown, setDropdown] = useState(false);

  const btnRef = useRef();

  useEffect ( () => {

  const closeDropdown = e => {
    if(e.path[0] !==btnRef.current) {
      setDropdown( false)
    }
  };

  document.body.addEventListener('click',closeDropdown);

  return () => document.body.removeEventListener('click',closeDropdown);

  }, [])



  return (
    <div className="items">
      {items.subitems ? (
        <>
          <button ref={btnRef} className="items" aria-expanded={dropdown ? "true" : "false"}
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


  const handleClick = e => {
    setDropdownmob((prev) => !prev);

  }


  const [dropdownmob, setDropdownmob] = useState(false);

  const btnRef = useRef();

  useEffect ( () => {

  const closeDropdown = e => {
    if(e.path[0] !==btnRef.current) {
      setDropdownmob( false)
    }
  };

  document.body.addEventListener('click',closeDropdown);

  return () => document.body.removeEventListener('click',closeDropdown);

  }, [])




  return (
    <div className="itemsmob">
      {items.subitems ? (
        <>
          <button ref={btnRef} className="itemsmob" id={items.id}
                aria-expanded={dropdownmob ? "true" : "false"}
                onClick={handleClick}>
              {items.title}
             {dropdownmob ?<FaAngleLeft size={16} className="dropupmob"/>:<FaAngleRight size={16} className="dropupmob"/>}
          </button>
          <DropdownMob key={items.id} subitemsmob={items.subitems} dropdownmob={dropdownmob}/>
        </>
      ) : (
        <a href={items.url}>{items.title}</a>
      )}
    </div>
  );
}

export {MainItems, MainItemsMob};
