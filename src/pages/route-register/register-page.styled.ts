import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

import { colors, OuterContainer } from "../../libs";

export const LoginPageContainer = styled(OuterContainer)`
  background-color: ${colors.background.black};
  padding: 0 15px;
  height: 90vh;
`;

export const LoginPageRow = styled(Row)``;

export const PackageInfoCol = styled(Col)``;

export const RegistrationCol = styled(Col)`
  background-color: ${colors.background.lightBlack};
  height: 90vh;
`;
