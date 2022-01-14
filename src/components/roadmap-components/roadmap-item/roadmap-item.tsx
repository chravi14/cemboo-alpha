import { IRoadmap } from "../types";
import * as Styled from "./roadmap-item.styled";

export const RoadmapItem: React.FC<IRoadmap> = ({ id, title, description }) => {
  return (
    <Styled.RoadmapTextWrapper>
      <Styled.RoadmapTextHeader>{title}</Styled.RoadmapTextHeader>
      <Styled.RoadmapText>{description}</Styled.RoadmapText>
    </Styled.RoadmapTextWrapper>
  );
};
