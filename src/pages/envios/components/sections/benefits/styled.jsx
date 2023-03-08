import styled from "styled-components";

export const BenefitsContainer = styled.div`
  @media (min-width: 768px) {
    background-color: #f5f5f5;
    padding-bottom: 0;
    padding-top: 0;
    position: relative;
  }
`;
export const PushBenefitsWrapper = styled.div`
  height: 1024px;
  width: 100%;

  .push-container {
    padding-bottom: 56px;
    padding-top: 56px;
    opacity: 1;
    transform: translateY(0) scale(1);
    @media (min-width: 768px) {
      background-color: #fff;
      -webkit-border-radius: 8px;
      border-radius: 8px;
      -webkit-box-shadow: 0 7px 7px 0 rgb(51 51 51 / 8%);
      box-shadow: 0 7px 7px 0 rgb(51 51 51 / 8%);
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      left: 0;
      margin-left: 64px;
      margin-right: 64px;
      padding: 32px 64px 0;
      position: absolute;
      right: 0;
      top: -64px;
      width: auto;
    }

    .push-item-container {
      margin: 0 auto 48px;
      width: 312px;
      @media (min-width: 768px) {
        margin-bottom: 0;
        max-width: 632px;
        height: 540px;
        overflow: hidden;
        padding-bottom: 64px;
        width: 100%;
      }
    }

    .container-title {
      margin-bottom: 0;
      @media (min-width: 768px) {
        width: 100%;
      }
    }

    .container-image {
      display: flex;
      margin-bottom: 0;
      justify-content: center;
      @media (min-width: 768px) {
        width: 100%;
        height: auto;
      }

      img {
        max-width: 312px;
        @media (min-width: 768px) {
          max-width: 440px;
        }
      }
    }

    .title {
      color: #04204c;
      font-stretch: normal;
      font-style: normal;
      letter-spacing: normal;
      text-align: center;
      font-size: 24px;
      font-weight: 400;
      line-height: 1.17;
      margin-bottom: 16px;
      @media (min-width: 768px) {
        font-size: 36px;
        line-height: 1.11;
      }
    }

    .text {
      font-size: 18px;
      font-weight: 300;
      line-height: 1.22;
      color: #04204c;
      font-stretch: normal;
      font-style: normal;
      letter-spacing: normal;
      text-align: center;
      font-size: 18px;
      font-weight: 300;
      line-height: 1.22;

      a {
        color: #3483fa;
        font-size: 16px;
        font-stretch: normal;
        font-style: normal;
        font-weight: 400;
        letter-spacing: normal;
        line-height: 1;
        cursor: pointer;
        text-decoration: none;
        @media (min-width: 768px) {
          font-size: 18px;
        }
      }
    }

    .separetor {
      height: 16px;
      width: 100%;
    }
  }
`
export const BackgroundImagePush = styled.div`
  background-image: url(${(props) => props.image});
  background-position: 50%;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  background-size: cover;
  height: 226px;
  margin-bottom: 32px;

  @media (min-width: 768px) {
    background-size: contain;
    height: 100%;
    margin: 0 auto;
    max-width: 440px;
    width: 101%;
  }
`;
export const TasksBenefitsWrapper = styled.div`
  box-sizing: border-box;
  text-align: center;
  width: 100%;
  background-color: #f5f5f5;
  @media (min-width: 768px) {
    padding: 0;
  }

  .section-task {
    overflow: hidden;
    width: 100%;
    opacity: 1;
    transform: translateY(0) scale(1);
  @media(min-width: 768px){
    padding-top: 130px;
  }
  }

  .task-title {
    color: #04204c;
    font-size: 22px;
    font-stretch: normal;
    font-style: normal;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 1;
    @media (min-width: 768px) {
      font-size: 32px;
    }
  }

  .task-container {
    box-sizing: border-box;
    padding: 32px 20px 0 40px;
    position: relative;
    @media (min-width: 768px) {
      margin: auto;
      overflow: hidden;
      padding: 10px 53px 0;
      width: 746px;
    }
  }
  a{
    color: #3483fa;
    cursor: pointer;
    text-decoration: none;
  }
  .task-item-container{
    display: flex;
    margin: auto auto 32px;
    text-align: left;
    width: 312px;
    background-color: transparent;
    @media (min-width: 768px) {
      margin-left: 0;
      background-color: transparent;
      display: block;
      float: left;
      height: 189px;
      margin: auto auto auto 23px;
      width: 190px;
    }
    &:not(:last-child) .image::after{
      border-left: 1px dashed #3483fa;
      bottom: -50px;
      content: "";
      height: 50px;
      left: 0;
      margin: 0 auto;
      position: absolute;
      right: 0;
      width: 1px;

      @media(min-width: 768px){
        border-top: 1px dashed #3483fa;
        bottom: 46%;
        content: "";
        height: 0;
        left: 148px;
        margin: 0 auto;
        position: absolute;
        right: 0;
        width: 187px;
      }

      @media(min-width: 768px){
        left: 120px;
        width: 199px;
      }
    }

    .image {
      border: 2px solid #f5f5f5;
      opacity: 1;
      transition-delay: 0.15s;
      display: inline-block;
      object-fit: contain;
      position: relative;
      width: 88px;
      @media (min-width: 768px) {
        width: 100%;
      }
    }

    .image-svg {
      background: #fff;
      border-radius: 50%;
      box-shadow: 0 7px 7px 0 rgb(40 46 87 / 8%);
      height: 68px;
      margin: 0 auto;
      position: relative;
      width: 68px;
      z-index: 2;
      @media (min-width: 768px) {
        display: block;
        height: 85px;
        width: 85px;
      }

    }

    .text-container {
      display: inline-block;
      margin: auto auto auto 10px;
      position: relative;
      text-align: left;
      width: 145px;
      @media (min-width: 768px) {
        align-items: center;
        display: flex;
        justify-content: center;
        margin-left: 0;
        margin-top: 24px;
        text-align: center;
        width: auto;
      }
    }

    .text-paragrafo {
      color: #04204c;
      transition-delay: 0.2s;
      font-size: 16px;
      font-stretch: normal;
      font-style: normal;
      font-weight: 300;
      letter-spacing: normal;
      line-height: 1.25;
      margin-top: -6px;
      transition-property: color;
      transition: 0.2s linear;
      @media (min-width: 768px) {
        margin-top: 0;
        width: 180px;
        font-size: 20px;
      }
    }
  }
`;


export const BackgroundImageTask = styled.div`
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  -webkit-background-size: contain;
  background-size: contain;
  height: 40px;
  left: 14px;
  position: absolute;
  top: 14px;
  width: 40px;
  @media (min-width: 768px) {
    height: 48px;
    left: 18.5px;
    top: 18.5px;
    width: 48px;
  }
`;

export const MeBenefitsWrapper = styled.div`
  opacity: 1;
  transform: translateY(0) scale(1);
  background-image: linear-gradient(0deg, #fff, #f5f5f5);
  margin-bottom: -30px;
  padding-bottom: 0;
  padding-top: 64px;
  @media (min-width: 768px) {
    margin-bottom: 0;
    overflow: hidden;
    padding: 120px 0 64px;
  }

  .me-title {
    color: #04204c;
    font-size: 28px;
    font-stretch: normal;
    font-style: normal;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 1.15;
    margin: 0 0 45.5px;
    text-align: center;
    width: 312px;
    @media (min-width: 768px) {
      font-size: 32px;
      height: auto;
      line-height: 1;
      margin: auto auto 46px;
      max-width: 512px;
      width: auto;
    }
  }

  .me-container{
    margin: auto;
    padding-bottom: 48px;
    gap: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 768px) {
      box-sizing: border-box;
      margin: auto;
      max-width: 1040px;
      padding: 0 64px;
    }
    @media(min-width: 1024px){
      flex-wrap: wrap;
      flex-direction: row;
    }
    .me-item-container{
      background-color: #fff;
      border-radius: 4px;
      box-shadow: 0 7px 7px 0 rgb(40 46 87 / 8%);
      box-sizing: border-box;
      height: auto;
      padding: 32px;
      text-align: center;
      width: 300px;
      @media (min-width: 768px) {
        max-width: 640px;
        padding: 40px;
        width: auto;
      }
      @media (min-width: 1024px) {
        width: 428px;
        flex-grow: 1;
        align-self: stretch;
      }

      .me-content {
        @media (min-width: 768px) {
          box-sizing: border-box;
          float: none;
        }
      }

      .me-title {
        font-stretch: normal;
        font-style: normal;
        letter-spacing: normal;
        text-align: center;
        color: #04204c;
        font-size: 20px;
        font-weight: 600;
        height: auto;
        line-height: 1.2;
        margin-bottom: 8px;
        width: 100%;
        @media (min-width: 768px) {
          margin: auto auto 8px;
          max-width: 512px;
          width: auto;
        }
      }

      .me-text {
        color: #666;
        font-size: 18px;
        font-weight: 500;
        line-height: 1.22;
        font-stretch: normal;
        font-style: normal;
        letter-spacing: normal;
        text-align: center;
        @media (min-width: 768px) {
          height: auto;
          margin: auto;
          max-width: 512px;
          width: auto;
        }
      }
    }
  }
`;

export const BackgroundImageMe = styled.div`
  background-image: url(${(props) => props.image});
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  height: 84px;
  margin: auto;
  width: 84px;
  @media (min-width: 768px) {
    float: none;
    margin-bottom: 0;
  }
`
