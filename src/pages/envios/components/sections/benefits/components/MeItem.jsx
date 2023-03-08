import React from "react";

const MeItem = (props) => {
  return (
    <div className={"me-item-container"}>
      {props.image}
      <div className={"me-content"}>
        <h4 className={"me-title"}>{props.title}</h4>
        <p className={"me-text"}>{props.text}</p>
      </div>
    </div>
  );
};

export default MeItem;
