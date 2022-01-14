import styled from "styled-components";
import { CustomHeader } from "../ui";
import RoadmapFullImage from "./../../assets/images/background/roadmap.png";

export const RoadmapWrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 100px;
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

export const RoadmapLineBg = styled.div`
  height: 1200px;
  background: url(${RoadmapFullImage});
  background-repeat: no-repeat;
  margin-top: 50px;
  width: 100%;
  background-position: top left;
  position: absolute;
  left: 50%;
  transform: translate(-25%);
`;

export const RoadmapBgWrapper = styled.div`
  position: relative;
  text-align: center;
`;

export const RoadmapContent = styled.div`
  position: absolute;
  withd: 100%;
  top: 800px;
  left: 25%;
  transform: translate(-25%);
`;
