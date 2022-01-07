import {
  CustomHeader,
  CustomSubHeader,
  CustomBoldText,
  CustomLightText,
} from "../../components/ui/typography";
import * as Styled from "./landing-page.styled";

export const LandingPage = () => {
  return (
    <Styled.LandingPageWrapper>
      <CustomHeader>Haydenfilms 1.0 Screenplay Competition</CustomHeader>
      <CustomSubHeader> Meet the Judges</CustomSubHeader>
      <CustomBoldText>Viktoria Decker</CustomBoldText>
      <CustomLightText size={14}>Senior Vice President,</CustomLightText>
      <CustomLightText size={16}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </CustomLightText>
    </Styled.LandingPageWrapper>
  );
};
