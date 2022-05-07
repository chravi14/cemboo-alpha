import React from "react";

import { isLinkActive } from "../utils";

import { MenuItem } from "./menu-item";

import * as Styled from "./MenuList.styled";

type Menu = {
  iconPath?: string;
  itemText: string;
  linkPath: string;
};

interface IProps {
  menuList: Menu[];
}

export const MenuList: React.FC<IProps> = ({ menuList }) => {
  return (
    <Styled.MenuListWrapper>
      {menuList.map((el) => (
        <MenuItem
          menuItemText={el.itemText}
          iconPath={el.iconPath}
          isActive={isLinkActive(el.linkPath)}
        />
      ))}
    </Styled.MenuListWrapper>
  );
};
