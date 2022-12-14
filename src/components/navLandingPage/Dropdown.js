import "./../../styles/NavLandingPage.css";

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

  export {DropdownMob};