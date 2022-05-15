import styled from "styled-components";
import { Row, Col, Card } from "react-bootstrap";
import { colors, types } from "../../../libs";

export const UploadContentWrapper = styled.div``;

export const UploadContentTitle = styled.h3`
  ${types.headers.small};
`;

export const UploadsRow = styled(Row)`
  margin-top: 10px;
  padding: 0;
`;

export const UploadCol = styled(Col)`
  margin: 10px 0;
`;

export const UploadCard = styled(Card)`
  cursor: pointer;
  background: #121419;
  border: 1px solid ${colors.text.lightWhite};
`;

export const UploadCardImage = styled(Card.Img)``;

export const UploadCardBody = styled(Card.Body)`
  padding: 5px 8px;
`;

export const UploadCardTitle = styled(Card.Title)`
  ${types.body.subtitle};
  color: ${colors.text.mediumWhite};
  margin-bottom: 2px;
`;

export const UploadCardText = styled(Card.Text)`
  ${types.body.small};
`;
