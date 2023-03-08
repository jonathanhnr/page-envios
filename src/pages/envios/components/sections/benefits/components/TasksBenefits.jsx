import React from "react";
import { BackgroundImageTask, TasksBenefitsWrapper } from "../styled.jsx";
import TaskItem from "./TaskItem.jsx";
import etiqueta from "../../../../assets/etiqueta.svg";
import place from "../../../../assets/place.svg";
import box from "../../../../assets/box.svg";

const TasksBenefits = () => {
  return (
    <TasksBenefitsWrapper>
      <div className={"section-task"}>
        <h2 className={"task-title"}>Suas tarefas mais simples</h2>
        <div className={"task-container"}>
          <TaskItem
            text={"Cada venda gera uma etiqueta de envio."}
            image={<BackgroundImageTask image={etiqueta} />}
          />
          <TaskItem
            text={"Basta preparar o seu produto."}
            image={<BackgroundImageTask image={box} />}
          />
          <TaskItem
            text={<> E levá-lo a um <a href="">ponto de envio</a> </>}
            image={<BackgroundImageTask image={place} />}
          />
        </div>
      </div>
    </TasksBenefitsWrapper>
  );
};

export default TasksBenefits;