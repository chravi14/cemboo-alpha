import styled from "styled-components";
import { Container, Image, Stack as BsStack } from "react-bootstrap";
import { types, colors } from "../../../../../libs";

export const CastUploadFormContainer = styled(Container)``;

export const CastImageUploadIcon = styled(Image)``;

export const CastUploadDiscardText = styled.span<any>`
  ${types.body.small};
  color: ${colors.text.white};
  cursor: pointer;
`;

export const CastUploadSaveText = styled.span<any>`
  ${types.body.normal};
  color: ${colors.text.green};
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
`;

export const Stack = styled(BsStack)`
  margin: 10px 0;
`;
