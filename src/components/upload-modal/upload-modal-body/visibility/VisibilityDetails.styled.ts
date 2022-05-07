import styled from "styled-components";
import { Stack, Row } from "react-bootstrap";

import { types, colors } from "./../../../../libs";

export const VisibilityDetailsHeader = styled.h3`
  ${types.body.secondaryTitle};
  color: ${colors.text.white};
  margin-bottom: 10px;
`;

export const HelpText = styled.p`
  ${types.body.normal};
  color: ${colors.text.mediumWhite};
  margin: 5px 0;
`;

export const FormFieldRow = styled(Row)`
  margin-bottom: 15px;
`;

export const VisibilityOptionsWrapper = styled(Stack)`
  width: 100%;
`;
