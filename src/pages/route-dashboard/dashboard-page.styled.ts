import styled, { css } from "styled-components";
import { Col, Image, Row, ProgressBar } from "react-bootstrap";

import { colors, types } from "../../libs";

export const DashboardPageWrapper = styled.div`
  background: ${colors.background.black};
  min-height: 100vh;
`;

export const DashboardHeader = styled.div`
  padding: 12px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${colors.background.lightBlack};
`;

export const DashboardHeaderLogo = styled(Image)`
  cursor: pointer;
  width: 121px;
`;

export const DashboardSearchWrapper = styled.div``;

export const SearchBarWrapper = styled.div`
  position: relative;
  width: 500px;
`;

export const SearchInput = styled.input`
  width: 100%;
  border-radius: 20px;
  padding: 8px 50px;
  background: #0c0c0c;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.2);

  &:focus {
    outline: none;
  }
`;

export const SearchIcon = styled.img`
  position: absolute;
  left: 25px;
  top: 14px;
`;

export const AvatarIconWrapper = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background: ${colors.background.disabled};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NotificationsIconWrapper = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background: ${colors.background.disabled};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

export const NotificationsIcon = styled.i`
  color: ${colors.text.green};
`;

export const AvatarIcon = styled.span`
  color: ${colors.text.white};
  ${types.headers.item};
`;

export const DashboardRightNavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DashboardSectionWrapper = styled(Row)`
  color: #fff;
  height: 90vh;
  padding: 0 10px;
`;

export const DashboardSectionSideMenuWrapper = styled(Col)`
  height: 100%;
  padding: 10px 20px;
  background: ${colors.background.lightBlack};
`;

export const SideMenuUploadCta = styled.div`
  padding: 15px 20px;
`;

export const SideMenuListWrapper = styled.ul``;

export const SideMenuLinkItemWrapper = styled.li``;

export const SideMenuUpgradeCard = styled.div`
  background: ${colors.background.brown};
  padding: 10px 15px;
  border-radius: 10px;
  margin-top: 25px;
  display: flex;
  height: 200px;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 15px;
  margin-right: 15px;
`;

export const UpgradeHeader = styled.p`
  ${types.body.secondaryTitle}
`;

export const UsageWrapper = styled.div`
  margin-top: 5px;
`;

export const UsageProgressBar = styled(ProgressBar)<any>`
  ${({ variant }) => variant === "primary" && css``}
  height: 5px;
`;

export const UsageText = styled.p`
  margin-top: 10px;
`;

export const UpgradeCtaLink = styled.a`
  color: ${colors.text.green};
`;

export const DashboardSectionMainWrapper = styled(Col)`
  padding: 25px;
`;
