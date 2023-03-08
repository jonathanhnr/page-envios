import React from "react";
import { FaqWrapper } from "./styled.jsx";
import FaqItem from "./component/FaqItem.jsx";

const Faq = () => {
  return (
    <FaqWrapper>
      <div className={"faq-container"}>
        <h2>Confira os detalhes</h2>
        <div className={"faq-accordion"}>
          <FaqItem
            title={"Em quais produtos vou oferecer Mercado Envios?"}
            text={
              <>
                Em todos os produtos que possam ser enviados por Correios ou
                transportadoras. Caso você esteja em dúvida sobre algum produto,
                basta conferir{" "}
                <a href="">
                  quais são as dimensões máximas permitidas para enviar
                  pacotes..
                </a>
              </>
            }
            index={0}
          />
          <FaqItem
            title={
              "Em quais produtos eu vou oferecer frete grátis com desconto?"
            }
            text={
              <>
                Nos produtos novos a partir de R$ 79 você oferecerá frete grátis
                e descontos significativos, terá desconto nos custos conforme a
                sua reputação e a categoria do produto.{" "}
                <a href="">Ver tarifas.</a>
              </>
            }
            index={1}
          />
          <FaqItem
            title={"Quando o dinheiro da minha venda ficará disponível?"}
            text={
              <>
                Se tiver reputação como vendedor ou o produto for novo, seu
                dinheiro estará disponível 8 dias após a entrega do produto.{" "}
                <br />
                <br />
                Se não tiver reputação como vendedor ou o produto for usado, seu
                dinheiro estará disponível 12 dias após a entrega do produto.{" "}
                <br />
                <br /> <a href="">Consultar minha reputação.</a>
              </>
            }
            index={2}
          />
          <FaqItem
            title={"Onde os produtos são despachados?"}
            text={
              <>
                Você pode levar seus produtos a qualquer um dos nossos{" "}
                <a href="">pontos de envio.</a>
              </>
            }
            index={3}
          />
          <FaqItem
            title={"Quando devo despachar os produtos?"}
            index={4}
            text={
              <>
                Assim que vender, prepare e despache o produto o mais rápido
                possível para oferecer a melhor experiência aos seus clientes e
                não afetar <a href=""> sua reputação como vendedor. </a> Em cada
                venda, te daremos orientações para despachar no prazo. <br />
                <br />
                Se você vende produtos personalizados e precisa de tempo para
                elaborar seus produtos, pode indicar o prazo no seu anúncio.{" "}
                <a>Confira mais detalhes.</a>
              </>
            }
          />
        </div>
      </div>
    </FaqWrapper>
  );
};

export default Faq;
