import styled from "styled-components";
import { CustomLightText, CustomSubHeader } from "./../../ui";

export const RoadmapTextWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 10px;
  align-items: center;
  margin: 24px 0;

  @media only screen and (min-width: 768px) {
    width: 100%;
    column-gap: 26px;
    margin: 8px 0;
  }

  @media only screen and (min-width: 960px) {
    column-gap: 26px;
    margin: 16px auto;
    padding: 10px;
  }
`;

export const RoadmapTextHeader = styled(CustomSubHeader)`
  grid-column: 2/5;

  @media only screen and (min-width: 768px) {
    grid-column: 2/5;
  }

  @media only screen and (min-width: 960px) {
    grid-column: 3/5;
  }
`;

export const RoadmapText = styled(CustomLightText)`
  grid-column: 6/12;
  color: rgba(255, 255, 255, 1);
  padding: 16px;
  @media only screen and (min-width: 768px) {
    grid-column: 5/13;
  }

  @media only screen and (min-width: 960px) {
    grid-column: 5/10;
  }
`;
