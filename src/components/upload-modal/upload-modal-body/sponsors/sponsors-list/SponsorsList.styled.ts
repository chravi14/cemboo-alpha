import styled from "styled-components";
import { CloseButton } from "react-bootstrap";

import { colors, types } from "../../../../../libs";

export const SponsorImageWrapper = styled.div`
  border: 1px solid rgba(183, 248, 77, 0.32);
  padding: 2px 10px;
  border-radius: 4px;
  width: 100px;
  height: 75px;
  display: flex;
  flex-direction: center;
  align-items: center;
  position: relative;
`;

export const SponsorImageNumber = styled.span`
  ${types.body.normal};
  color: ${colors.text.lightWhite};
  position: absolute;
  top: -2px;
  left: 5px;
`;

export const SponsorDeleteIcon = styled(CloseButton)`
  position: absolute;
  top: -2px;
  right: 5px;
  width: 1px;
`;
