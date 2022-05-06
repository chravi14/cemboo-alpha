import styled from "styled-components";
import { Row, Col, Image, Button } from "react-bootstrap";

import { colors, OuterContainer, types } from "../../libs";

import LoginPageImage from "./../../assets/images/login_image.png";

export const LoginPageContainer = styled(OuterContainer)`
  background-color: ${colors.background.black};
  max-height: 100vh;
  padding: 0;
  height: 100vh;
`;

export const LoginPageRow = styled(Row)`
  padding: 0;
  margin: 0;
`;

export const LoginFormContainer = styled(Col)`
  padding: 0;
`;

export const LoginFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

export const LoginFormHeader = styled.header`
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LoginPageLogo = styled(Image)`
  cursor: pointer;
  width: 121px;
`;

export const LoginPageRightNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RegistrationLinkText = styled.p`
  ${types.body.normal};
  color: ${colors.text.mediumWhite};
  margin-right: 10px;
`;

export const RegistrationLinkButton = styled(Button)`
  color: ${colors.text.white};
  margin-left: 10px;
  padding: 5px 30px;

  &:hover,
  &:active,
  &:focus,
  &:focus-visible {
    background: ${colors.background.darkGradient};
    border: 1px solid transparent;
    outline: none;
    box-shadow: none;
  }
`;

export const LoginPageImageContainer = styled(Col)`
  padding: 0;
  background-image: url(${LoginPageImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
  position: relative;
`;

export const LoginPageImageTextWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  padding: 30px;
  left: 50px;
`;

export const LoginPageImageTextHeader = styled.h3`
  ${types.body.normal};
  color: ${colors.text.white};
  margin-bottom: 45px;
`;

export const LoginPageImageTextLogo = styled(Image)``;
