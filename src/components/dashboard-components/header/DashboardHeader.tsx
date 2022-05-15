import React from "react";

import { HeaderLogo } from "../../../libs";

import SearchIcon from "./../../../assets/images/icons/search.svg";

import * as Styled from "./DashboardHeader.styled";

export const DashboardHeader: React.FC = () => {
  return (
    <Styled.DashboardHeader>
      <HeaderLogo />
      <Styled.DashboardSearchWrapper>
        <Styled.SearchBarWrapper>
          <Styled.SearchInput
            name="search"
            type="text"
            placeholder="Search your library"
          />
          <Styled.SearchIcon src={SearchIcon} />
        </Styled.SearchBarWrapper>
      </Styled.DashboardSearchWrapper>
      <Styled.DashboardRightNavWrapper>
        <Styled.NotificationsIconWrapper>
          <Styled.NotificationsIcon className="fas fa-bell"></Styled.NotificationsIcon>
        </Styled.NotificationsIconWrapper>

        <Styled.AvatarIconWrapper>
          <Styled.AvatarIcon>C</Styled.AvatarIcon>
        </Styled.AvatarIconWrapper>
      </Styled.DashboardRightNavWrapper>
    </Styled.DashboardHeader>
  );
};
