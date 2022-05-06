import React from "react";
import { Image } from "react-bootstrap";

import * as Styled from "./MenuItem.styled";

interface IMenuItemProps {
  menuItemText: string;
  iconPath?: string;
  isActive?: boolean;
}

export const MenuItem: React.FC<IMenuItemProps> = ({
  iconPath,
  menuItemText,
  isActive = false,
}) => {
  return (
    <Styled.MenuItemContainer active={isActive}>
      <Styled.MenuItemRow className="align-items-center">
        {iconPath && (
          <Styled.MenuItemIconWrapper md={3}>
            <Image src={iconPath} />
          </Styled.MenuItemIconWrapper>
        )}
        <Styled.MenuItemTextWrapper md={9}>
          <Styled.MenuItemText>{menuItemText}</Styled.MenuItemText>
        </Styled.MenuItemTextWrapper>
      </Styled.MenuItemRow>
    </Styled.MenuItemContainer>
  );
};
