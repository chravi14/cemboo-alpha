import styled from "styled-components";

export const CustomHeader = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.04em;
  background: -webkit-linear-gradient(
    270.35deg,
    #b7f84d 0.39%,
    #ffffff 102.68%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }

  @media screen and (min-width: 960px) {
    font-size: 32px;
    line-height: 44px;
  } ;
`;

export const CustomSubHeader = styled.h3`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.04em;
  background: -webkit-linear-gradient(
    270.35deg,
    #b7f84d 0.39%,
    #ffffff 102.68%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const CustomBoldText = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.04em;
  color: rgba(255, 255, 255, 1);
`;

export const CustomLightText = styled.p<any>`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.04em;
  color: rgba(255, 255, 255, 0.6);
  margin-top: ${({ marginTop }) => (marginTop ? `${marginTop}px` : 0)};

  @media screen and (min-width: 768px) {
    font-size: ${({ size }) => `${size}px`};
  }
`;
