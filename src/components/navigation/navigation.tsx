import React from "react";
import Logo from "./../../assets/logo.png";
import MobileMenuIcon from "./../../assets/menu.png";
import { MobileMenu } from "./mobile-menu";

import * as Styled from "./navigation.styled";
import { Button } from "../ui/button/button";
import { Modal } from "../ui";

export const Navigation = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
  const [showSignInModal, setShowSignInModal] = React.useState(false);
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
        <Button
          buttonText="Notify Me"
          clickHandler={() => setShowSignInModal(true)}
        />
      </Styled.NavRightLinksWrapper>
      <Styled.MobileMenuIconWrapper>
        <Styled.MobileMenuIcon
          src={MobileMenuIcon}
          onClick={() => setShowMobileMenu(true)}
        />
      </Styled.MobileMenuIconWrapper>
      <MobileMenu
        show={showMobileMenu}
        closeHandler={() => setShowMobileMenu(false)}
      />
      <Modal
        closeHandler={() => setShowSignInModal(false)}
        show={showSignInModal}
      />
    </Styled.NavigationWrapper>
  );
};
