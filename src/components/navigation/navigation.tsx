import React from "react";
import Logo from "./../../assets/logo.png";

import * as Styled from "./navigation.styled";
import { Button } from "../ui/button/button";

export const Navigation = () => {
  return (
    <Styled.NavigationWrapper>
      <Styled.LogoWrapper>
        <Styled.LogoLink href="/">
          <Styled.LogoImage src={Logo} />
        </Styled.LogoLink>
      </Styled.LogoWrapper>
      <Styled.NavLeftLinksWrapper>
        <Styled.NavLinkItem>
          <Styled.StyledNavLink
            to="about"
            activeclassname="active"
            exact="true"
          >
            About
          </Styled.StyledNavLink>
        </Styled.NavLinkItem>
        <Styled.NavLinkItem>
          <Styled.StyledNavLink
            to="roadmap"
            activeclassname="active"
            exact="true"
          >
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
