import styled from "styled-components";
import { Form } from "react-bootstrap";
import { colors } from "../../themes";

export const FormGroupFloatingLabel = styled(Form.FloatingLabel)`
  color: ${colors.text.mediumWhite};
`;

export const FormGroupInput = styled(Form.Control)<any>`
  background: ${colors.background.formField};
  color: ${colors.text.white};
  font-size: 16px;
  border: none;
  padding: 15px;

  &:focus {
    border: none;
    outline: none;
    background: ${colors.background.formField};
    border: none;
    box-shadow: none;
    color: rgba(255, 255, 255, 1);
    padding: 13px;
  }
`;
