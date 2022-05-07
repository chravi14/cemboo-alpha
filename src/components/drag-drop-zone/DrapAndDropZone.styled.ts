import styled, { css } from "styled-components";
import { Stack } from "react-bootstrap";

import { types } from "./../../libs";

export const DragAndDropZoneWrapper = styled.div<any>`
  border: 1px solid #4c6848;
  padding: 20px;
  border-radius: 10px;
  background: linear-gradient(
      0deg,
      rgba(183, 248, 77, 0.04),
      rgba(183, 248, 77, 0.04)
    ),
    #0b0b0b;

  ${({ isDragReject }) =>
    isDragReject &&
    css`
      border-color: "#ff1744";
    `}
`;

export const DragAndDropZoneTextWrapper = styled(Stack)<any>`
  text-align: ${({ textAlign }) => textAlign};
`;

export const DragAndDropZoneText = styled.span`
  ${types.body.normal};
`;
