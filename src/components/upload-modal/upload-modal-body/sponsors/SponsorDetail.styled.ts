import styled from "styled-components";
import { Row } from "react-bootstrap";

import { types, colors } from "./../../../../libs";

export const SponsorsDetailsHeader = styled.h3`
  ${types.body.secondaryTitle};
  color: ${colors.text.white};
  margin-bottom: 10px;
`;

export const FormFieldRow = styled(Row)`
  margin-bottom: 15px;
`;

export const HelpText = styled.p`
  ${types.body.small};
  color: ${colors.text.mediumWhite};
  margin: 10px 0;
`;
