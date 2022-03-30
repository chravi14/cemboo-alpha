import styled from "styled-components";
import { colors, StepIndicator } from "../../../libs";

export const RegistrationStepsWrapper = styled.div``;

export const RegistrationStepIndicator = styled(StepIndicator)`
  border: none;
  background: none;
  gap: 5px;
  box-shadow: none;
`;

export const NavbarLine = styled.hr`
  height: 1px !important;
  top: -3px;
  width: 121px;
  position: absolute;
  left: calc(63.5%);
  background-color: ${colors.text.mediumWhite};

  @media screen and (max-width: 500px) {
    top: -6px;
    width: 106px;
    left: calc(65.5%);
  }
`;
