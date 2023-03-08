import styled from "styled-components";

export const FaqWrapper = styled.div`
  background: #f5f5f5;
  padding: 93px 0 64px;
  @media (min-width: 768px) {
    padding: 120px 64px;
  }

  .faq-container {
    margin: auto;
    max-width: 1040px;

    .faq-accordion{
      margin: 0;
      padding: 0 32px;
      @media (min-width: 768px) {
        padding: 0;
      }

      .faq-component-style {
        border-bottom: 1px solid #ddd;
        list-style: none;
        margin-bottom: 1px;
        overflow: hidden;
        padding-bottom: 16px;
        position: relative;

        input[type="radio"]:checked ~ .tab-content {
          max-height: 20em;
          padding-bottom: 16px;
        }

        input[type="radio"]:checked ~ label h4 .rotate {
          transform: rotate(180deg);
        }

        input {
          display: none;
        }

        label {
          cursor: pointer;
          display: block;
          padding: 32px 0 0;
          position: relative;
          @media (min-width: 758px) {
            padding: 32px 5px 0 24px;
          }

          h4 {
            color: #04204c;
            font-size: 20px;
            font-stretch: normal;
            font-style: normal;
            font-weight: 600;
            letter-spacing: normal;
            line-height: 1.2;
            margin: 0;
            padding-bottom: 16px;
            position: relative;
            text-align: left;
            display: flex;
            justify-content: space-between;
          }

          i {
            transform: rotate(0deg);
            color: #3483fa;
            font-family: loyalty-fonts;
            font-size: 12px;
            font-style: normal;
            font-weight: 100;
            line-height: 24px;
            overflow: hidden;
            position: absolute;
            right: 20px;
            top: 0;
          }
        }

        .tab-content {
          max-height: 0;
          overflow: hidden;
          padding-bottom: 0;
          transition: max-height .35s ease, padding-bottom .35s ease;

          p {
            color: #666;
            font-size: 16px;
            font-stretch: normal;
            font-style: normal;
            font-weight: 400;
            letter-spacing: normal;
            line-height: normal;
            margin: 0;
            padding: 0;
            text-align: left;
            @media (min-width: 768px) {
              padding: 0 60px 0 24px;
              font-size: 20px;
              line-height: 1.2;
            }
          }
        }

        a {
          color: #3483fa;
          cursor: pointer;
          text-decoration: none;
        }
      }
    }
  }

  h2 {
    text-align: center;
    color: #04204c;
    font-size: 28px;
    font-stretch: normal;
    font-style: normal;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 1.15;
    margin: 0 0 45.5px;
  }

`