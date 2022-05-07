import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

import { colors, OuterContainer } from "../../libs";

export const RegistrationPageContainer = styled(OuterContainer)`
  background-color: ${colors.background.black};
  padding: 0 15px;
  min-height: 100vh;
`;

export const RegistrationPageRow = styled(Row)``;

export const PackageInfoCol = styled(Col)``;

export const RegistrationCol = styled(Col)`
  background-color: ${colors.background.lightBlack};
  height: 100vh;
`;
