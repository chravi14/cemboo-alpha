import React from "react";

import * as Styled from "./dashboard-page.styled";

import {
  DashboardHeader,
  DashboardContent,
  DashboardSideMenu,
} from "../../components";
import { dataService } from "../../services";
import { IUpload } from "../../libs";

export const DashboardPage = () => {
  const clientId = "123456";
  const [clientUploads, setClientUploads] = React.useState<IUpload[]>([]);
  const [showUploadContent, setShowUploadContent] = React.useState(true);

  React.useEffect(() => {
    async function getUserUploads() {
      const results = await dataService.getUserUploads(clientId);
      if (results) {
        setClientUploads(results);
        setShowUploadContent(false);
      }
    }
    getUserUploads();
  }, []);

  const uploadVideoHandler = React.useCallback(() => {
    setShowUploadContent(true);
  }, []);

  const handleBackToUploadsClick = React.useCallback(() => {
    setShowUploadContent(false);
  }, []);

  const handleUploadsUpdate = React.useCallback(
    (newUpload: IUpload) => {
      if (newUpload) {
        setClientUploads([newUpload, ...clientUploads]);
        setShowUploadContent(false);
      }
    },
    [clientUploads]
  );

  return (
    <Styled.DashboardPageWrapper>
      <DashboardHeader />
      <Styled.DashboardSectionWrapper>
        <Styled.DashboardSectionSideMenuWrapper md={3}>
          <DashboardSideMenu onClickUploadVideo={uploadVideoHandler} />
        </Styled.DashboardSectionSideMenuWrapper>
        <Styled.DashboardSectionMainWrapper md={9}>
          <DashboardContent
            clientId={clientId}
            clientUploads={clientUploads}
            showUploadContent={showUploadContent}
            showBackText={showUploadContent && clientUploads.length > 0}
            onBackTextClick={handleBackToUploadsClick}
            onUpdateUploads={handleUploadsUpdate}
          />
        </Styled.DashboardSectionMainWrapper>
      </Styled.DashboardSectionWrapper>
    </Styled.DashboardPageWrapper>
  );
};
