import React from "react";

const Padawan = props => {
  console.log(props.char);
  return (
    <div className="char-card">
      <div>
        <h2>{props.char.name}</h2>
        <p>Height: {props.char.height}</p>
        <p>Weight: {props.char.mass}</p>
        <p>Hair Color: {props.char.hair_color}</p>
      </div>
    </div>
  );
};

export default Padawan;
