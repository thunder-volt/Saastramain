import React from "react";

const Card = (props) => {
  return (
    <div className={props.class}>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
      <p className="author">{props.author}</p>
    </div>
  );
};

export default Card;
