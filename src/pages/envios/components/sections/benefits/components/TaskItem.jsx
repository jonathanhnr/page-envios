import React from "react";

const TaskItem = (props) => {
  return (
    <div className={"task-item-container"}>
      <div className={"image"}>
        <div className={"image-svg"}>{props.image}</div>
      </div>
      <div className={"text-container"}>
        <p className={"text-paragrafo"}>{props.text}</p>
      </div>
    </div>
  );
};

export default TaskItem;
