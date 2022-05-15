import styled from "styled-components";
import { Container, Image, Stack as BsStack } from "react-bootstrap";
import { types, colors } from "../../../../../libs";

import CastUploadIcon from "./../../../../../assets/images/image_upload_icon.svg";

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

export const CastUploadBtn = styled.input`
  width: 160px;
  &::-webkit-file-upload-button {
    visibility: hidden;
  }
  &::before {
    content: url(${CastUploadIcon});
    display: inline-block;
    white-space: nowrap;
    -webkit-user-select: none;
    cursor: pointer;
  }
`;
