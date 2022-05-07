import React from "react";

import { HeaderLogo } from "../../../libs";
import { UploadSteps } from "./upload-steps";

import * as Styled from "./UploadModalHeader.styled";

interface IUploadModalHeaderProps {
  currentStep?: number;
  onStepClick: (selectedStepNumber: number) => void;
}

const UploadModalHeaderContent: React.FC<IUploadModalHeaderProps> = ({
  currentStep,
  onStepClick,
}) => {
  return (
    <Styled.UploadModalHeaderWrapper>
      <Styled.UploadModalHeaderRow>
        <Styled.UploadModalHeaderLogoCol md={1}>
          <HeaderLogo />
        </Styled.UploadModalHeaderLogoCol>
        <Styled.UploadModalHeaderStepsCol md={10}>
          <UploadSteps onStepClick={onStepClick} currentStep={currentStep} />
        </Styled.UploadModalHeaderStepsCol>
      </Styled.UploadModalHeaderRow>
    </Styled.UploadModalHeaderWrapper>
  );
};

export const UploadModalHeader: React.FC<IUploadModalHeaderProps> = ({
  onStepClick,
  currentStep = 1,
}) => {
  return (
    <Styled.ModalHeader closeButton closeVariant="white">
      <Styled.ModalTitle>
        <UploadModalHeaderContent
          currentStep={currentStep}
          onStepClick={onStepClick}
        />
      </Styled.ModalTitle>
    </Styled.ModalHeader>
  );
};
