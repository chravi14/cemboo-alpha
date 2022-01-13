import styled from "styled-components";
import { CustomHeader, CustomLightText, CustomSubHeader } from "../ui";
import RoadmapImage from "./../../assets/images/roadmap.png";
import RoadmapLineImage from "./../../assets/images/roadmap_line.png";

export const RoadmapWrapper = styled.div`
  padding-top: 20px;
`;

export const RoadmapHeader = styled(CustomHeader)`
  width: 100%;
  text-align: center;
  @media only screen and (min-width: 768px) {
    font-size: 64px;
    line-height: 72px;
    wdith: 75%;
    margin: 0 auto;
  }
`;

export const RoadmapImageWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-top: 70px;
  position: relative;
  text-align: center;
`;

export const RoadmapImageOne = styled.div`
  background: url(${RoadmapImage});
  width: 100%;
  height: 335px;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 75px;
  left: 0;
`;

export const RoadmapImageTwo = styled.div`
  background: url(${RoadmapLineImage});
  width: 100%;
  height: 700px;
  background-repeat: no-repeat;
  background-position: center top;
  position: absolute;
  top: 350px;
  left: -160px;
  position: relative;
`;

export const RoadmapFirstImage = styled.img`
  text-align: center;
`;

export const RoadmapTextWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 10px;
  align-items: center;
  margin: 24px 0;
  &:last-of-type {
    padding-bottom: 100px;
  }

  @media only screen and (min-width: 768px) {
    padding: 50px;
    width: 100%;
    column-gap: 26px;
    margin: 8px 0;
  }

  @media only screen and (min-width: 960px) {
    padding: 50px;
    width: 75%;
    column-gap: 26px;
    margin: 8px 0;
  }
`;

export const RoadmapTextHeader = styled(CustomSubHeader)`
  grid-column: 2/5;

  @media only screen and (min-width: 768px) {
    grid-column: 2/5;
  }

  @media only screen and (min-width: 960px) {
    grid-column: 4/6;
  }
`;

export const RoadmapText = styled(CustomLightText)`
  grid-column: 6/12;
  color: rgba(255, 255, 255, 1);
  @media only screen and (min-width: 768px) {
    grid-column: 5/13;
  }

  @media only screen and (min-width: 960px) {
    grid-column: 6/13;
  }
`;
