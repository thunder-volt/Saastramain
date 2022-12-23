import "./../../styles/NavBar.css";

const Dropdown = ({ subitems, dropdown }) => {
    return (
      <ul className={`dropdown ${dropdown}`}>
        {subitems.map((subitems) => (
          <div key={subitems.id} className="subitems">
            <a href={subitems.url}>{subitems.title}</a>
          </div>
        ))}
      </ul>
    );
  };

const DropdownMob = ({ subitemsmob, dropdownmob }) => {
    return (
      <ul className={`dropdownmob ${dropdownmob}`}>
        {subitemsmob.map((subitems) => (
          <div key={subitems.id} className="subitemsmob">
            <a href={subitems.url}>{subitems.title}</a>
          </div>
        ))}
      </ul>
    );
  };

  export {Dropdown, DropdownMob};