import React from "react";
import { IntegrationBoxContainer } from "./styled.jsx";

const IntegrationBox = () => {
  return (
    <IntegrationBoxContainer>
      <h2>
        Sejamos uma equipe <br /> Junte-se ao Mercado Envios
      </h2>
      <div className={"btn-component"}>
        <a href="">Ir para Anúncios</a>
      </div>
    </IntegrationBoxContainer>
  );
};

export default IntegrationBox;
