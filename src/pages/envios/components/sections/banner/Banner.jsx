import React from "react";
import { BackgroundImage, BannerContent, Overlay } from "./styles.jsx";

const Banner = () => {
  return (
    <BackgroundImage>
      <Overlay />
      <div className={'animate__animated animate__fadeInUp'}>
        <BannerContent>
          <h1 >Envie suas vendas com o Mercado Envios</h1>
          <p>
            Você oferecerá frete grátis com até 50% de desconto no serviço, e os
            seus produtos estarão em destaque nos resultados de busca.
          </p>
        </BannerContent>
      </div>
    </BackgroundImage>
  );
};

export default Banner;