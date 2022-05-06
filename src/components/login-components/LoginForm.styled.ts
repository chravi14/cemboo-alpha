import styled from "styled-components";
import { Form, Row, Col } from "react-bootstrap";
import { colors, types } from "../../libs";

export const LoginPageWrapper = styled.div`
  padding: 10px 0;
  width: 60%;
  margin: 0 auto;
`;

export const LoginPageHeader = styled.h1`
  ${types.headers.section};
  color: ${colors.text.white};
`;

export const RegistrationLinkText = styled.p`
  ${types.body.subtitle};
  color: ${colors.text.mediumWhite};
`;

export const RegistrationLink = styled.a`
  color: ${colors.text.green};
`;

export const LoginFormWrapper = styled.div`
  margin-top: 20px;
  padding: 10px 0;
  flex: 1;
`;

export const LoginFormRow = styled(Row)`
  margin: 10px 0;
`;

export const LoginForm = styled(Form)`
  margin-top: 20px;
`;

export const LoginFormCol = styled(Col)`
  padding: 0;
  text-align: right;
`;

export const ForgotPasswordText = styled.span`
  ${types.body.normal};
  color: ${colors.text.mediumWhite};
  cursor: pointer;
`;
