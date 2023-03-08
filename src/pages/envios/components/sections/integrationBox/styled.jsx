import styled from "styled-components";
import integration from "../../../assets/integration.jpg";

export const IntegrationBoxContainer = styled.div`
    background-image: url(${integration});
  background-position-x: 30%;
  background-repeat: no-repeat,repeat-x;
  background-size: cover;
  box-sizing: border-box;
  min-height: 288px;
  padding: 64px 0;
  position: relative;
  @media(min-width: 758px){
    background-position-x: 0;
    min-height: 353px;
    padding: 84px 0;
    position: relative;
  }
  h2{
    opacity: 1;
    transform: translateY(0) scale(1);
    color: #fff;
    font-size: 24px;
    font-stretch: normal;
    font-style: normal;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 1.2;
    margin: auto auto 40px;
    text-align: center;
    width: 312px;
    @media(min-width: 758px){
      font-size: 42px;
      margin: auto auto 32px;
      width: 640px;
    }
  }
  .btn-component{
    opacity: 1;
    transform: translateY(0) scale(1);
    margin: auto;
    width: 185px;
    a{
      background-color: #fff;
      border-radius: 4px;
      box-shadow: 0 7px 7px 0 rgb(40 46 87 / 8%);
      color: #3483fa;
      display: table-cell;
      font-size: 18px;
      font-stretch: normal;
      font-style: normal;
      font-weight: 400;
      height: 48px;
      letter-spacing: normal;
      line-height: 1;
      margin: 0 auto;
      text-align: center;
      vertical-align: middle;
      width: 185px;
      cursor: pointer;
      text-decoration: none;
      @media(min-width: 768px){
        height: 54px;
        width: 185px;
      }
    }
  }
`