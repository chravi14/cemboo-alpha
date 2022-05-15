import React from "react";

import { HeaderLogo } from "../../../libs";
import { ContentTypes } from "../types";
import { UploadSteps } from "./upload-steps";

import * as Styled from "./UploadModalHeader.styled";

interface IUploadModalHeaderProps {
  contentType?: ContentTypes;
  onStepClick: (contentType: ContentTypes) => void;
}

const UploadModalHeaderContent: React.FC<IUploadModalHeaderProps> = ({
  contentType,
  onStepClick,
}) => {
  return (
    <Styled.UploadModalHeaderWrapper>
      <Styled.UploadModalHeaderRow>
        <Styled.UploadModalHeaderLogoCol md={1}>
          <HeaderLogo />
        </Styled.UploadModalHeaderLogoCol>
        <Styled.UploadModalHeaderStepsCol md={10}>
          <UploadSteps onStepClick={onStepClick} contentType={contentType} />
        </Styled.UploadModalHeaderStepsCol>
      </Styled.UploadModalHeaderRow>
    </Styled.UploadModalHeaderWrapper>
  );
};

export const UploadModalHeader: React.FC<IUploadModalHeaderProps> = ({
  onStepClick,
  contentType = ContentTypes.UPLOAD_DETAILS,
}) => {
  return (
    <Styled.ModalHeader closeButton closeVariant="white">
      <Styled.ModalTitle>
        <UploadModalHeaderContent
          contentType={contentType}
          onStepClick={onStepClick}
        />
      </Styled.ModalTitle>
    </Styled.ModalHeader>
  );
};
