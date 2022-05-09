import styled from "styled-components";
import {
  Stack,
  Popover as BsPopover,
  ListGroupItem as BsListGroupItem,
  Image as BsImage,
} from "react-bootstrap";

import { types, colors } from "../../../../../libs";

export const ThumbnailImagesWrapper = styled(Stack)``;

export const Popover = styled(BsPopover)`
  background: #1e2025;
`;

export const PopoverBody = styled(Popover.Body)`
  padding: 0px;
  border: 1px solid rgba(255, 255, 255, 1);
`;

export const ListGroupItem = styled(BsListGroupItem)`
  background: #1e2025;
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
  margin-top: 10px;
  align-items: center;
  &:first-child {
    border-bottom: 1px solid #fff;
  }
`;

export const ListImage = styled(BsImage)`
  margin-right: 10px;
`;

export const UploadFromDeviceWrapper = styled.div``;

export const ChooseFromVideoWrapper = styled.div``;

export const OrText = styled.h3`
  ${types.body.normal};
  color: ${colors.text.green};
`;

export const ThumbnailFileInput = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;

  & + label {
    ${types.body.subtitle};
    padding: 0.375rem 0.75rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    background: ${colors.background.linearGradient};
    border-color: ${colors.background.linearGradient};
    color: ${colors.text.green};
    display: inline-block;
  }
`;
