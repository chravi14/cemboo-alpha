import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavigationWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
`;

export const LogoWrapper = styled.div`
  margin-right: 20px;
  padding: 20px;

  @media only screen and (max-width: 600px) {
    margin-right: 5px;
    padding: 10px;
  }
`;

export const LogoLink = styled.a``;

export const LogoImage = styled.img`
  cursor: pointer;
  width: 121px;
`;

export const NavLeftLinksWrapper = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const NavLinkItem = styled.li`
  display: inline-block;
  margin: 10px 20px;
`;

export const StyledNavLink = styled(NavLink)<any>`
  color: #ffffff;
  font-weight: 600;
  font-size: 14px;
  border-bottom: 2px solid transparent;
  padding-bottom: 5px;

  &.active {
    border-bottom: 2px solid rgba(183, 248, 77, 1);
  }
`;

export const NavRightLinksWrapper = styled.ul`
  padding: 10px 20px;
  @media only screen and (max-width: 600px) {
    padding: 0;
  }
`;

export const MobileMenuIconWrapper = styled.div`
  @media only screen and (min-width: 600px) {
    display: none;
  }
  margin: 0 5px;
`;

export const MobileMenuIcon = styled.img`
  width: 30px;
`;
