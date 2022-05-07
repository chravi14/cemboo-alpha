import React from "react";
import { Button, Dropdown } from "react-bootstrap";

import { BaseButton, DropdownButton, MenuList } from "../../libs";

import * as Styled from "./dashboard-page.styled";

import CembooLogo from "./../../assets/images/logos/logo.png";
import SearchIcon from "./../../assets/images/icons/search.svg";
import MenuIcon from "./../../assets/images/icons/menu_icon.png";
import ActiveMenuIcon from "./../../assets/images/icons/menu_icon_active.png";
import { DragAndDropZone } from "../../components";

export const DashboardPage = () => {
  const [uploadedFiles, setUploadedFiles] = React.useState<File[]>([]);

  const uploadVideoHandler = React.useCallback(() => {
    console.log("Upload vido clicked");
  }, []);

  const liveStreamHandler = React.useCallback(() => {
    console.log("Live stream clicked");
  }, []);

  const menuList = [
    {
      iconPath: ActiveMenuIcon,
      itemText: "Dashboard",
      linkPath: "/dashboard",
    },
    {
      iconPath: MenuIcon,
      itemText: "Library",
      linkPath: "/library",
    },
    {
      iconPath: MenuIcon,
      itemText: "Playlists",
      linkPath: "/playlists",
    },
    {
      iconPath: MenuIcon,
      itemText: "Live Channels",
      linkPath: "/live-channels",
    },
    {
      iconPath: MenuIcon,
      itemText: "Ad Server",
      linkPath: "/ad-server",
    },
  ];

  const handleOnDrop = React.useCallback(
    (acceptedFiles) => {
      setUploadedFiles([...uploadedFiles, ...acceptedFiles]);
      console.log(uploadedFiles);
    },
    [uploadedFiles]
  );

  return (
    <Styled.DashboardPageWrapper>
      <Styled.DashboardHeader>
        <Styled.DashboardHeaderLogo src={CembooLogo} />
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

      <Styled.DashboardSectionWrapper>
        <Styled.DashboardSectionSideMenuWrapper md={3}>
          <Styled.SideMenuUploadCta>
            <DropdownButton>
              <Dropdown.Item onClick={uploadVideoHandler}>
                Upload a Video
              </Dropdown.Item>
              <Dropdown.Item onClick={liveStreamHandler}>
                Start Live Streaming
              </Dropdown.Item>
            </DropdownButton>
          </Styled.SideMenuUploadCta>
          <Styled.SideMenuListWrapper>
            <MenuList menuList={menuList} />
          </Styled.SideMenuListWrapper>
          <Styled.SideMenuUpgradeCard>
            <Styled.UpgradeHeader>Need more from Cemboo?</Styled.UpgradeHeader>
            <Styled.UsageWrapper>
              <Styled.UsageProgressBar now={10} variant="success" />
              <Styled.UsageText>11TB of 15TB used</Styled.UsageText>
            </Styled.UsageWrapper>
            <Styled.UpgradeCtaLink>
              Upgrade to next level <i className="fas fa-arrow-right"></i>
            </Styled.UpgradeCtaLink>
          </Styled.SideMenuUpgradeCard>
        </Styled.DashboardSectionSideMenuWrapper>
        <Styled.DashboardSectionMainWrapper md={9}>
          <DragAndDropZone
            acceptedFileType="image/jpeg, image/png"
            onDropHandler={handleOnDrop}
            direction="vertical"
            dropMessageText="Drag and drop or click to upload a movie"
          />
        </Styled.DashboardSectionMainWrapper>
      </Styled.DashboardSectionWrapper>
    </Styled.DashboardPageWrapper>
  );
};
