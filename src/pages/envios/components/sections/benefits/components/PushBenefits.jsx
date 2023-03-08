import React from "react";
import { BackgroundImagePush, PushBenefitsWrapper} from "../styled.jsx";
import PushItem from "./PushItem.jsx";
import benefits from "../../../../assets/benefits.jpg";
import benefits2 from "../../../../assets/benefits2.jpg";


const PushBenefits = () => {
  return (
    <PushBenefitsWrapper >
      <div className={'push-container'}>
        <PushItem
          title={"Cobrimos até 50% do custo dos seus fretes grátis"}
          text={
            "Com o Mercado Envios, todas as suas vendas a partir de R$ 79 têm frete grátis e descontos significativos e nós pagamos até 50% do custo desses envios."
          }
          a={"Ver tarifas e descontos."}
          image={benefits}
        />
        <PushItem
          title={"Melhore a exposição dos seus anúncios"}
          text={
            "Os seus produtos com frete grátis terão um filtro exclusivo e você poderá ganhar melhor posicionamento nos resultados de busca."
          }
          image={benefits2}
        />
      </div>
    </PushBenefitsWrapper>
  );
};

export default PushBenefits;