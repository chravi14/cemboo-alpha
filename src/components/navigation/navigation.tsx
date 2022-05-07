import React from "react";
import { useLocation } from "react-router-dom";
import Logo from "./../../assets/images/logos/logo.png";
import MobileMenuIcon from "./../../assets/images/icons/menu.png";
import SearchIcon from "./../../assets/images/icons/search.svg";

import { MobileMenu } from "./mobile-menu";

import * as Styled from "./navigation.styled";
import { Button } from "../ui/button/button";
import { Modal } from "../ui";
import { ROUTEPATHS, isComingSoon, replaceLocation } from "../../libs";

export const Navigation = () => {
  const location = useLocation();
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
  const [showSignInModal, setShowSignInModal] = React.useState(false);
  const showNotifyMe = isComingSoon;

  const shouldDisplayMenuLinks =
    location.pathname !== ROUTEPATHS.REGISTER &&
    location.pathname !== ROUTEPATHS.LOGIN;
  const isDashboardPage = location.pathname === ROUTEPATHS.DASHBOARD;

  const handleGetStartedClick = () => {
    replaceLocation(ROUTEPATHS.REGISTER);
  };

  return (
    <Styled.NavigationWrapper>
      <Styled.LogoWrapper>
        <Styled.LogoLink href="/">
          <Styled.LogoImage src={Logo} />
        </Styled.LogoLink>
      </Styled.LogoWrapper>
      {shouldDisplayMenuLinks && !isDashboardPage && (
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
      )}
      {shouldDisplayMenuLinks && !isDashboardPage && (
        <Styled.NavRightLinksWrapper>
          {showNotifyMe ? (
            <Button
              buttonText="Notify Me"
              clickHandler={() => setShowSignInModal(true)}
            />
          ) : (
            <Button
              buttonText="Get Started"
              clickHandler={handleGetStartedClick}
            />
          )}
        </Styled.NavRightLinksWrapper>
      )}
      {isDashboardPage && (
        <>
          <Styled.SearchBarWrapper>
            <Styled.SearchInput
              name="search"
              type="text"
              placeholder="Search your library"
            />
            <Styled.SearchIcon src={SearchIcon} />
          </Styled.SearchBarWrapper>
          <Styled.UserMenuIconsWrapper>
            <Styled.NotificationsIcon className="fas fa-bell"></Styled.NotificationsIcon>
            <Styled.ProfileIcon />
          </Styled.UserMenuIconsWrapper>
        </>
      )}

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
