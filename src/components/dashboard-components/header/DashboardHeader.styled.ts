import styled from "styled-components";

import { Image } from "react-bootstrap";

import { colors, types } from "../../../libs";

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
