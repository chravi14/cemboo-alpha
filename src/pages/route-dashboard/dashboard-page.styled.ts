import styled from "styled-components";
import { Col, Row } from "react-bootstrap";

import { colors } from "../../libs";

export const DashboardPageWrapper = styled.div`
  background: ${colors.background.black};
  min-height: 100vh;
`;

export const DashboardSectionWrapper = styled(Row)`
  color: #fff;
  height: 90vh;
  padding: 0 10px;
`;

export const DashboardSectionSideMenuWrapper = styled(Col)`
  height: 100%;
  padding: 10px 20px;
  background: ${colors.background.lightBlack};
`;

export const DashboardSectionMainWrapper = styled(Col)`
  padding: 25px;
`;
