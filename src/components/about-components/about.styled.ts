import styled from "styled-components";
import {
  CustomBoldText,
  CustomHeader,
  CustomLightText,
  CustomSubHeader,
} from "../ui";

export const AboutHeroWrapper = styled.div`
  text-align: center;
  width: 100%;

  @media only screen and (min-width: 768px) {
    width: 75%;
    margin: 0 auto;
  }

  @media only screen and (min-width: 960px) {
    padding: 20px;
  }
`;

export const AboutHeroHeader = styled(CustomHeader)`
  font-size: 40px;
  line-height: 72px;
  margin-bottom: 10px;
  @media screen and (min-width: 960px) {
    font-size: 64px;
    line-height: 72px;
    margin-bottom: 20px;
  }
`;

export const AboutStatsWrapper = styled.div`
  display: grid;
  margin: 40px 0;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  align-items: center;

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media only screen and (min-width: 960px) {
    row-gap: 45px;
  }
`;

export const StatsItemWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    &:nth-child(1) {
      grid-column: 3/4;
    }
    &:nth-child(3) {
      grid-column: 3/4;
    }
  }
`;

export const StatsYear = styled(CustomHeader)`
  font-size: 64px;
  line-height: 72px;
`;

export const StatsYearSubText = styled(CustomBoldText)`
  font-size: 16px;
`;

export const StoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 0;
  padding-bottom: 48px;

  @media only screen and (min-width: 960px) {
    width: 75%;
    margin: 0 auto;
  }
`;

export const StoryTitle = styled(CustomSubHeader)`
  font-size: 32px;
  line-height: 32px;
  margin-bottom: 10px;

  @media only screen and (min-width: 960px) {
    margin-bottom: 26px;
  }
`;

export const StoryTextWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (min-width: 960px) {
    gap: 24px;
  }
`;

export const StoryText = styled(CustomLightText)`
  text-indent: 10px;
  text-align: justify;
  font-size: 16px;
  color: rgba(255, 255, 255, 1);

  @media only screen and (min-width: 768px) {
    &:nth-child(1) {
      grid-row: 1/3;
    }
    &:nth-child(2) {
      grid-column: 1/2;
    }

    &:nth-child(3) {
      grid-column: 2/4;
      grid-row: 1/2;
    }

    &:nth-child(4) {
      grid-row: 2/5;
    }
  }
`;
