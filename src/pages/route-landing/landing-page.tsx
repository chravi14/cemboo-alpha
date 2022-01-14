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
            Thank you for joining our competition’s live premiere!
            Congratulations to our finalists, and our feature winner! All
            screenwriters delivered excellent pitches this weekend for some
            great works.
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
