import styled, { css } from "styled-components";
import { Row, Col } from "react-bootstrap";
import { BaseContainer } from "../../../layout/Container/Container.styled";
import { colors } from "../../../themes";

export const MenuItemContainer = styled(BaseContainer)`
  border-left: 2px solid transparent;
  ${({ isactive }) =>
    isactive &&
    css`
      border-color: ${colors.background.green};
    `}
`;

export const MenuItemRow = styled(Row)`
  margin: 10px 0;
  cursor: pointer;

  &:hover {
    color: ${colors.text.green};
  }
`;

export const MenuItemIconWrapper = styled(Col)``;

export const MenuItemTextWrapper = styled(Col)``;

export const MenuItemText = styled.span``;
