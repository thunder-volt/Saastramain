import "./../../styles/NavBar.css";

const Dropdown = ({ subitems, dropdown }) => {
    return (
      <ul className={`dropdown ${dropdown}`}>
        {subitems.map((subitems, index) => (
          <div key={index} className="subitems">
            <a href={subitems.url}>{subitems.title}</a>
          </div>
        ))}
      </ul>
    );
  };

const DropdownMob = ({ subitemsmob, dropdownmob }) => {
    return (
      <ul className={`dropdownmob ${dropdownmob}`}>
        {subitemsmob.map((subitems, index) => (
          <div key={index} className="subitemsmob">
            <a href={subitems.url}>{subitems.title}</a>
          </div>
        ))}
      </ul>
    );
  };

  export {Dropdown, DropdownMob};