import styled from "styled-components";
import { Row, Form } from "react-bootstrap";

import { colors, types } from "../../../../libs";

import SwitchOffImage from "./../../../../assets/images/switch_off.svg";
import SwitchOnImage from "./../../../../assets/images/switch_on.svg";

export const LanguageDetailsHeader = styled.h3`
  ${types.body.secondaryTitle};
  color: ${colors.text.white};
  margin-bottom: 10px;
`;

export const FormFieldRow = styled(Row)`
  margin-bottom: 15px;
`;

export const RequiredText = styled.p`
  ${types.body.small};
  color: ${colors.text.green};
  margin: 5px 0;
`;

export const HelpText = styled.p`
  ${types.body.small};
  color: ${colors.text.mediumWhite};
  margin: 5px 0;
`;

export const SubtitleField = styled.div`
  ${colors.background.lightBlack};
  padding: 10px;
`;

export const FormSwitch = styled(Form.Check)`
  padding-left: 0;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;

  .form-check-input {
    background-color: #1e2025;
    border: 1px solid rgba(255, 255, 255, 0.5);
    background-image: url(${SwitchOffImage});
    &:focus {
      background-image: url(${SwitchOffImage});
      border-color: transparent;
      box-shadow: none;
      border: 1px solid rgba(255, 255, 255, 0.5);
    }

    &:checked {
      background-color: #b7f84d;
      border-color: #b7f84d;
      background-image: url(${SwitchOnImage});
    }
  }
`;
