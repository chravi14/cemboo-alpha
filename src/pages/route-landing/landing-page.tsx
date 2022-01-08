import { JudgesList, Player } from "../../components";
import { CustomHeader, CustomLightText } from "../../components/ui/typography";
import * as Styled from "./landing-page.styled";
import HFILogo from "./../../assets/images/logos/hfi-logo.png";

export const LandingPage = () => {
  return (
    <Styled.LandingPageWrapper>
      <Styled.PlayerWrapper>
        <Player />
      </Styled.PlayerWrapper>
      <Styled.EventInfo>
        <Styled.SectionInnerContainer className="title">
          <CustomHeader>Haydenfilms 1.0 Screenplay Competition</CustomHeader>
        </Styled.SectionInnerContainer>
        <Styled.SectionInnerContainer className="description">
          <CustomLightText size={16} marginTop={16}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </CustomLightText>
        </Styled.SectionInnerContainer>
        <Styled.SectionInnerContainer className="logo">
          <Styled.LogoWrapper>
            <Styled.LogoImage src={HFILogo} />
          </Styled.LogoWrapper>
        </Styled.SectionInnerContainer>
      </Styled.EventInfo>
      <Styled.JudgesContainer>
        <JudgesList />
      </Styled.JudgesContainer>
    </Styled.LandingPageWrapper>
  );
};
