import React from "react";
import { Dropdown } from "react-bootstrap";

import { DropdownButton, MenuList } from "../../../libs";

import * as Styled from "./Sidemenu.styled";

import MenuIcon from "./../../../assets/images/icons/menu_icon.png";
import ActiveMenuIcon from "./../../../assets/images/icons/menu_icon_active.png";

interface ISideMenuProps {
  onClickUploadVideo: () => void;
}

export const DashboardSideMenu: React.FC<ISideMenuProps> = ({
  onClickUploadVideo,
}) => {
  const uploadVideoHandler = React.useCallback(() => {
    console.log("Upload vido clicked");
    onClickUploadVideo();
  }, [onClickUploadVideo]);

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
  return (
    <>
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
    </>
  );
};
