import styled from "styled-components";

import { Row, Col, Modal } from "react-bootstrap";
import { colors } from "../../../libs";

export const UploadBodyWrapper = styled(Modal.Body)`
  background: ${colors.background.black};
  padding: 30px 10px;
`;

export const UploadBodyWrapperRow = styled(Row)`
  align-items: flex-start;
`;

export const UploadFormWrapper = styled(Col)`
  background: #0b0b0b;
  color: #fff;
  padding: 0 48px;
  clear: both;
`;

export const UploadPreviewWrapper = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #121419;
  padding: 100px;
`;
