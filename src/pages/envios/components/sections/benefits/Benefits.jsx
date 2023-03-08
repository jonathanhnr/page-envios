import React from "react";
import {BenefitsContainer} from "./styled.jsx";
import PushBenefits from "./components/PushBenefits.jsx";
import MeBenefits from "./components/MeBenefits.jsx";
import TasksBenefits from "./components/TasksBenefits.jsx";

const Benefits = () => {
  return (
    <BenefitsContainer>
      <PushBenefits />
      <TasksBenefits />
      <MeBenefits />
    </BenefitsContainer>
  );
};

export default Benefits;