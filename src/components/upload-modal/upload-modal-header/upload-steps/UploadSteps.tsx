import React from "react";
import { Stack } from "react-bootstrap";

import { StepIndicator } from "./../../../../libs";

import * as Styled from "./UploadSteps.styled";

interface IProps {
  currentStep?: number;
  onStepClick: (selectedStepNumber: number) => void;
}

export const UploadSteps: React.FC<IProps> = ({
  currentStep = 1,
  onStepClick,
}) => {
  const handleStepBtnClick = React.useCallback(
    (stepNumber: number) => {
      onStepClick(stepNumber);
    },
    [onStepClick]
  );

  return (
    <Stack direction="horizontal" gap={5} className="justify-content-center">
      <StepIndicator
        stepName="Details"
        stepNumber={1}
        isActive={currentStep === 1}
        direction="row"
        onStepClick={() => handleStepBtnClick(1)}
      >
        <Styled.ConnectorLine />
      </StepIndicator>

      <StepIndicator
        stepName="Language/CC"
        stepNumber={2}
        isActive={currentStep === 2}
        direction="row"
        onStepClick={() => handleStepBtnClick(2)}
      >
        <Styled.ConnectorLine />
      </StepIndicator>
      <StepIndicator
        stepName="Cast"
        stepNumber={3}
        direction="row"
        isActive={currentStep === 3}
        onStepClick={() => handleStepBtnClick(3)}
      >
        <Styled.ConnectorLine />
      </StepIndicator>
      <StepIndicator
        stepName="Sponsors"
        stepNumber={4}
        direction="row"
        isActive={currentStep === 4}
        onStepClick={() => handleStepBtnClick(4)}
      >
        <Styled.ConnectorLine />
      </StepIndicator>
      <StepIndicator
        stepName="Visibility"
        stepNumber={5}
        direction="row"
        isActive={currentStep === 5}
        onStepClick={() => handleStepBtnClick(5)}
      />
    </Stack>
  );
};
