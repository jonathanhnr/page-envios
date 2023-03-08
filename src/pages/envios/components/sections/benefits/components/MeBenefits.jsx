import React from "react";
import { BackgroundImageMe, MeBenefitsWrapper } from "../styled.jsx";
import MeItem from "./MeItem.jsx";
import payment from "../../../../assets/payment.svg";
import secure from "../../../../assets/secure.svg";
import tracking from "../../../../assets/tracking.svg";
import coordenation from "../../../../assets/coordenation.svg";
import cart from "../../../../assets/cart.svg";
import reputation from "../../../../assets/reputation.svg";

const MeBenefits = () => {
  return (
    <MeBenefitsWrapper>
      <h2 className={"me-title"}>E mais benefícios</h2>
      <div className={"me-container"}>
        <MeItem
          image={<BackgroundImageMe image={payment} />}
          title={"Receba mais rápido"}
          text={
            "Vamos liberar o dinheiro entre 5 a 9 dias após o produto chegar."
          }
        />
        <MeItem
          image={<BackgroundImageMe image={secure} />}
          title={"Conte com o nosso respaldo"}
          text={
            "Todos os seus pacotes estão assegurados. Se houver algum imprevisto, nós cobrimos você."
          }
        />
        <MeItem
          image={<BackgroundImageMe image={tracking} />}
          title={"Os envios têm acompanhamento"}
          text={"Você e o seu comprador podem acompanhar o envio o tempo todo."}
        />
        <MeItem
          image={<BackgroundImageMe image={coordenation} />}
          title={"Você não precisa combinar cada envio"}
          text={
            "O comprador seleciona o envio ao comprar e o paga pelo Mercado Pago."
          }
        />
        <MeItem
          image={<BackgroundImageMe image={cart} />}
          title={"Venda mais com o carrinho"}
          text={
            "Os seus compradores poderão adicionar diversos dos seus produtos ao carrinho e economizar nos custos de frete."
          }
        />
        <MeItem
          image={<BackgroundImageMe image={reputation} />}
          title={"Melhore sua reputação"}
          text={
            "O seu bom serviço e a velocidade do envio dos produtos potencializam a sua reputação."
          }
        />
      </div>
    </MeBenefitsWrapper>
  );
};

export default MeBenefits;
