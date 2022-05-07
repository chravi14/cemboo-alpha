import React from "react";

import * as Styled from "./dashboard-page.styled";

import {
  DashboardHeader,
  DashboardContent,
  DashboardSideMenu,
} from "../../components";

export const DashboardPage = () => {
  return (
    <Styled.DashboardPageWrapper>
      <DashboardHeader />
      <Styled.DashboardSectionWrapper>
        <Styled.DashboardSectionSideMenuWrapper md={3}>
          <DashboardSideMenu />
        </Styled.DashboardSectionSideMenuWrapper>
        <Styled.DashboardSectionMainWrapper md={9}>
          <DashboardContent />
        </Styled.DashboardSectionMainWrapper>
      </Styled.DashboardSectionWrapper>
    </Styled.DashboardPageWrapper>
  );
};
