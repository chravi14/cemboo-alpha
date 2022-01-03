import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavigationWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-item: center;
  height: 60px;
`;

export const LogoWrapper = styled.div`
  margin-right: 20px;
  padding: 20px;
`;

export const LogoImage = styled.img`
  cursor: pointer;
  width: 121px;
`;

export const NavLeftLinksWrapper = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
`;

export const NavLinkItem = styled.li`
  display: inline-block;
  margin: 10px 20px;
`;

export const StyledNavLink = styled(NavLink)<any>`
  color: #ffffff;
  font-weight: 600;
  font-size: 14px;
`;

export const NavRightLinksWrapper = styled.ul`
  padding: 10px 20px;
`;
