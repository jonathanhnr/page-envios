import React, { useEffect } from "react";
import Banner from "./components/sections/banner/Banner.jsx";
import Benefits from "./components/sections/benefits/Benefits.jsx";
import Faq from "./components/sections/faq/Faq.jsx";
import "./index.css";
import IntegrationBox from "./components/sections/integrationBox/IntegrationBox.jsx";
import "animate.css";

const PaginaEnvios = () => {
  return (
    <div>
      <Banner />
      <Benefits />
      <Faq />
      <IntegrationBox />
    </div>
  );
};

export default PaginaEnvios;
