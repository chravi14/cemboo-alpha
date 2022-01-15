import { CustomLightText, InnerContainer } from "../ui";
import * as Styled from "./about.styled";

export const AboutContainer = () => {
  return (
    <>
      <InnerContainer>
        <Styled.AboutHeroWrapper>
          <Styled.AboutHeroHeader>Hi, we’re Cemboo</Styled.AboutHeroHeader>
          <CustomLightText size={18}>
            Our mission is to empower content owners with the flexibility to
            control, monetize and distribute their own digital media content
            through values of quality, community and innovation.
          </CustomLightText>
        </Styled.AboutHeroWrapper>
      </InnerContainer>
      <InnerContainer>
        <Styled.AboutContentWrapper>
          <Styled.AboutContentYearWrapper>
            <Styled.StatsYear>2011</Styled.StatsYear>
            <Styled.StatsYearSubText>year founded</Styled.StatsYearSubText>
          </Styled.AboutContentYearWrapper>
          <Styled.AboutContentTextWrapper>
            <Styled.StoryTextWrapper>
              <Styled.StoryText>
                Cemboo was the direct brainchild of a decades-long endeavor in
                digital creativity called the Haydenfilms Film Festival. The
                Festival itself was born out of Haydenfilms, an independent film
                and distribution company originally founded in Kutztown, PA.
                Haydenfilms itself is dedicated to the support and development
                of emerging independent filmmakers and student filmmakers.
              </Styled.StoryText>
              <Styled.StoryText>
                The organization’s founder, Hayden Craddolph, envisioned the
                Film Festival out of his thesis during his time as an Electronic
                Media postgraduate at Kutztown University in 2001. In 2004,
                Haydenfilms hosted what would be one of the world’s first online
                film festivals.
              </Styled.StoryText>
              <Styled.StoryText>
                It is with the first festival’s success that ignited Craddolph’s
                vision of a network platform that allowed for all-encompassing
                content distribution for library users.
              </Styled.StoryText>
              <Styled.StoryText>
                Through the Haydenfilms Online Film Festival grew the concept of
                Cemboo as a global platform that allows viewers worldwide the
                ability to distribute, share, own, and showcase their own
                digital content, as well as content created by others. By 2011,
                Haydenfilms would receive a Research Grant Millersville
                University’s Software Productization Center (SPC) to develop a
                prototype software that we now refer to as Cemboo.
              </Styled.StoryText>
            </Styled.StoryTextWrapper>
          </Styled.AboutContentTextWrapper>
        </Styled.AboutContentWrapper>
      </InnerContainer>
    </>
  );
};
