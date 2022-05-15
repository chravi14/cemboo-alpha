import styled from "styled-components";
import { Stack, Row, Spinner } from "react-bootstrap";

import { types, colors } from "./../../../../libs";

export const VisibilityDetailsHeader = styled.h3`
  ${types.body.secondaryTitle};
  color: ${colors.text.white};
  margin-bottom: 10px;
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

export const FormFieldRow = styled(Row)`
  margin-bottom: 15px;
`;

export const VisibilityOptionsWrapper = styled(Stack)`
  width: 100%;
`;

export const LoadingSpinner = styled(Spinner)`
  margin-right: 10px;
`;