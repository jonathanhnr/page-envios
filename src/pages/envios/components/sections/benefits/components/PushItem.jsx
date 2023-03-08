import React from "react";

const PushItem = (props) => {
  return (
    <div className={"push-item-container"}>
      <div className={"container-title"}>
        <h3 className={"title"}>{props.title}</h3>
        <div className={"text"}>
          {props.text}
          <div className={"separetor"}></div>
          <a href="">{props.a}</a>
        </div>
      </div>
      <div className={"container-image"}>
        <img src={props.image} alt="" />
      </div>
    </div>
  );
};

export default PushItem;
