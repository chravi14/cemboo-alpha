import styled, { css } from "styled-components";

import { Badge as BsBadge } from "react-bootstrap";
import { colors } from "../../themes";

export const StepButton = styled.div<any>`
  padding: 4px 8px;
  border: 1px solid #34363a;
  box-shadow: 0 1px 1px #34363a;
  cursor: pointer;

  border-radius: 2px;
  ${({ isActive }) =>
    isActive &&
    css`
      background: #34363a;
      border-color: transparent;
    `}

  position:relative;
  display: flex;
  align-items: center;
  flex-direction: ${({ direction }) => direction};

  @media screen and (max-width: 500px) {
    border: none;
    box-shadow: none;
    background: none;
    padding: 0;
  }
`;

export const Badge = styled(BsBadge)<any>`
  color: #0b0b0b;
`;

export const StepButtonText = styled.span<any>`
  color: ${colors.text.disabled};
  font-size: 14px;

  ${({ isActive }) =>
    isActive &&
    css`
      color: ${colors.text.white};
    `}

  ${({ hideTextOnMobile }) =>
    hideTextOnMobile &&
    css`
      @media screen and (max-width: 500px) {
        display: none;
      }
    `}
`;
