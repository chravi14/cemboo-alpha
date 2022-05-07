import styled from "styled-components";
import {
  Stack,
  Popover as BsPopover,
  ListGroupItem as BsListGroupItem,
  Image as BsImage,
} from "react-bootstrap";

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
