import React from "react";

import * as Styled from "./StepIndicator.styled";

interface IProps {
  stepName: string;
  stepNumber: number;
  isActive?: boolean;
  onStepClick: () => void;
  children?: React.ReactNode;
  direction?: "row" | "column";
  hideTextOnMobile?: boolean;
}

export const StepIndicator: React.FC<IProps> = ({
  stepNumber,
  stepName,
  isActive,
  onStepClick,
  children,
  direction = "column",
  hideTextOnMobile = false,
  ...opts
}) => {
  return (
    <Styled.StepButton
      isActive={isActive}
      onClick={onStepClick}
      direction={direction}
      {...opts}
    >
      <Styled.Badge
        pill
        bg={isActive ? "primary" : "secondary"}
        direction={direction}
      >
        {stepNumber}
      </Styled.Badge>
      <Styled.StepButtonText
        isActive={isActive}
        hideTextOnMobile={hideTextOnMobile}
      >
        {stepName}
      </Styled.StepButtonText>
      {children}
    </Styled.StepButton>
  );
};
