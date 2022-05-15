import styled, { css } from "styled-components";
import { ProgressBar } from "react-bootstrap";

import { colors, types } from "../../../libs";

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
