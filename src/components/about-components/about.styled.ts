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
  margin: 0 auto;
  @media only screen and (min-width: 768px) {
    width: 75%;
  }

  @media only screen and (min-width: 960px) {
    padding: 20px;
    width: 65%;
  }
`;

export const AboutHeroHeader = styled(CustomHeader)`
  font-size: 40px;
  line-height: 72px;
  margin-bottom: 10px;
  width: 75%;
  margin: 0 auto;
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
    // &:nth-child(1) {
    //   grid-column: 3/4;
    // }
    &:nth-child(3) {
      grid-column: 3/4;
    }
  }
`;

export const StatsYear = styled(CustomHeader)`
  font-size: 128px;
  line-height: 128px;
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
  padding: 10px;
  padding-bottom: 40px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  // background: rgba(0, 0, 0, 0.8);

  @media only screen and (min-width: 768px) {
    padding: 25px;
  }

  @media only screen and (min-width: 960px) {
    padding: 25px 50px;
  }
`;

export const StoryText = styled(CustomLightText)`
  text-indent: 10px;
  text-align: justify;
  font-size: 16px;
  color: rgba(255, 255, 255, 1);

  // @media only screen and (min-width: 768px) {
  //   &:nth-child(1) {
  //     grid-row: 1/3;
  //   }
  //   &:nth-child(2) {
  //     grid-column: 1/2;
  //   }

  //   &:nth-child(3) {
  //     grid-column: 2/4;
  //     grid-row: 1/2;
  //   }

  //   &:nth-child(4) {
  //     grid-row: 2/5;
  //   }
  // }
`;

export const AboutContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  margin-top: 35px;
  align-items: center;
  @media only screen and (min-width: 960px) {
    padding: 30px;
  }
`;

export const AboutContentYearWrapper = styled.div`
  text-align: center;
  @media only screen and (max-width: 600px) {
    grid-column: 1/13;
  }

  @media only screen and (min-width: 601px) and (max-width: 959px) {
    grid-column: 1/13;
  }
  @media only screen and (min-width: 960px) {
    grid-column: 3/6;
  }
`;

export const AboutContentTextWrapper = styled.div`
  @media only screen and (min-width: 960px) {
    grid-column: 6/11;
  }

  @media only screen and (min-width: 601px) and (max-width: 959px) {
    grid-column: 1/13;
  }

  @media only screen and (max-width: 600px) {
    grid-column: 1/13;
  }
`;

export const AboutContentTextTitle = styled.div``;

export const AboutContentText = styled.div``;
