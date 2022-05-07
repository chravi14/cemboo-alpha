import styled from "styled-components";
import { Modal, Row, Col } from "react-bootstrap";

import { colors, OuterContainer } from "./../../../libs";

export const UploadModalHeaderWrapper = styled(OuterContainer)`
  padding: 15px;
`;

export const UploadModalHeaderRow = styled(Row)``;

export const UploadModalHeaderLogoCol = styled(Col)``;

export const UploadModalHeaderStepsCol = styled(Col)``;

export const UploadModalHeaderRightNavCol = styled(Col)``;

export const ModalHeader = styled(Modal.Header)`
  background: ${colors.background.black};
  color: ${colors.text.mediumWhite};
  border-bottom: none;
  padding: 0;
  padding-right: 20px;
`;

export const ModalTitle = styled(Modal.Title)`
  flex: 1;
`;
