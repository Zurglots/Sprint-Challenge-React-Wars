import React from "react";
import Padawan from "./Padawan";

const CharacterList = props => {
  return (
    <div>
      {props.person.map(char => {
        return <Padawan char={char} />;
      })}
    </div>
  );
};

export default CharacterList;
