import React from "react";
import { Col, Stack } from "react-bootstrap";

import * as Styled from "./RegistrationSteps.styled";

export const RegistrationSteps = () => {
  const [activeStep, setActiveStep] = React.useState(1);

  const handleStepBtnClick = React.useCallback((stepNumber: number) => {
    setActiveStep(stepNumber);
  }, []);
  return (
    <Styled.RegistrationStepsWrapper>
      <Stack direction="horizontal" gap={5} className="justify-content-center">
        <Styled.RegistrationStepIndicator
          stepName="Account Info"
          stepNumber={1}
          isActive={activeStep === 1}
          onStepClick={() => handleStepBtnClick(1)}
        >
          <Styled.NavbarLine />
        </Styled.RegistrationStepIndicator>

        <Styled.RegistrationStepIndicator
          stepName="Billing Info"
          stepNumber={2}
          isActive={activeStep === 2}
          onStepClick={() => handleStepBtnClick(2)}
        >
          <Styled.NavbarLine />
        </Styled.RegistrationStepIndicator>
        <Styled.RegistrationStepIndicator
          stepName="Payment"
          stepNumber={3}
          isActive={activeStep === 3}
          onStepClick={() => handleStepBtnClick(3)}
        ></Styled.RegistrationStepIndicator>
      </Stack>
    </Styled.RegistrationStepsWrapper>
  );
};
