import styled from "styled-components";
import { Form, Row } from "react-bootstrap";
import { colors, types } from "../../../libs";

export const RegistrationWrapper = styled.div`
  text-align: center;
  padding: 10px 0;
`;

export const RegistrationFormWrapper = styled.div`
  margin-top: 20px;
  padding: 10px 0;
`;

export const RegistrationFormHeader = styled.h1`
  ${types.headers.section};
  color: ${colors.text.white};
`;

export const LoginText = styled.p`
  ${types.body.subtitle};
  color: ${colors.text.mediumWhite};
`;

export const LoginLink = styled.a`
  color: ${colors.text.green};
`;

export const RegistrationForm = styled(Form)`
  margin-top: 20px;
`;

export const RegisterFormRow = styled(Row)`
  justify-content: center;
  margin: 10px 0;
`;

export const TermsText = styled.p`
  margin: 10px 0;
  color: ${colors.text.disabled};
  ${types.body.normal};
`;

export const TermsTextLink = styled.span`
  color: ${colors.text.white};
  ${types.body.normal};
`;
