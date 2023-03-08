import styled from "styled-components";
import bannerPath from "../../../assets/banner.jpg";
import 'animate.css';


 export const BackgroundImage = styled.div`
  background-image: url(${bannerPath});
  background-position-x: 80%;
  background-repeat: no-repeat, repeat-x;
  background-size: cover;
  height: 360px;
  position: relative;
  @media (min-width: 768px) {
   min-height: 550px;
  }
 `
 export const Overlay = styled.div`
  background: linear-gradient(90deg,#2d2527 -11.9%,
  rgba(58, 54, 55, .731) 32.36%,
  rgba(95, 99, 104, 0) 79.79%),
  linear-gradient(270deg,#2d2525 -12.05%,
  rgba(95, 99, 104, 0) 57.78%);
  height: 100%;
  position: absolute;
  width: 100%;

`
export const BannerContent = styled.div`
  margin: 0 auto;
  padding-bottom: 56px;
  padding-top: 56px;
  width: 322px;
  transform: translateY(0) scale(1);

  @media (min-width: 768px) {
    color: #fff;
    margin: auto;
    max-width: 640px;
    padding-bottom: 105px;
    padding-top: 127px;
    width: auto;
   animation:animate__backInUp;
  }

  h1 {
    color: #fff;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: center;
    font-size: 30px;
    font-weight: 300;
    line-height: 1.19;
    margin-bottom: 15px;
    @media (min-width: 768px) {
      font-size: 56px;
      font-weight: 500;
      height: 124px;
      line-height: 1.11;
      margin: 0 0 16px;
      width: auto;
    }
  }

  p {
    font-size: 20px;
    font-weight: 500;
    line-height: 1.3;
    margin: auto;
    width: 74%;
    color: #fff;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: center;

    @media (min-width: 768px) {
      font-size: 24px;
      font-weight: 400;
      line-height: 1.17;
      width: 641px;
      margin: auto;
    }
  }
`


