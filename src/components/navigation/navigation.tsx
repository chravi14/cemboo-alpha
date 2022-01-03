import React from "react";
import Logo from "./../../assets/logo.png";

import * as Styled from "./navigation.styled";
import { Button } from "../ui/button/button";

export const Navigation = () => {
  return (
    <Styled.NavigationWrapper>
      <Styled.LogoWrapper>
        <Styled.LogoImage src={Logo} />
      </Styled.LogoWrapper>
      <Styled.NavLeftLinksWrapper>
        <Styled.NavLinkItem>
          <Styled.StyledNavLink to="about" activeClassName="active">
            About
          </Styled.StyledNavLink>
        </Styled.NavLinkItem>
        <Styled.NavLinkItem>
          <Styled.StyledNavLink to="roadmap" activeClassName="active">
            Roadmap
          </Styled.StyledNavLink>
        </Styled.NavLinkItem>
      </Styled.NavLeftLinksWrapper>
      <Styled.NavRightLinksWrapper>
        <Button buttonText="Notify Me" />
      </Styled.NavRightLinksWrapper>
    </Styled.NavigationWrapper>
  );
};
