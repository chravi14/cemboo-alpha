import * as Styled from "./roadmap.styled";
import RoadmapImage from "./../../assets/images/roadmap.png";
import RoadmapFullImage from "./../../assets/images/background/roadmap.png";
import { RoadmapItem } from "./roadmap-item";
import { RoadmapData } from "../../data/roadmap";

export const RoadmapContainer = () => {
  const roadmapData = RoadmapData.map((roadmap) => (
    <RoadmapItem key={roadmap.id} {...roadmap} />
  ));
  return (
    <Styled.RoadmapWrapper>
      <Styled.RoadmapHeader>Cemboo Roadmap</Styled.RoadmapHeader>
      <Styled.RoadmapBgWrapper>
        <Styled.RoadmapLineBg></Styled.RoadmapLineBg>
      </Styled.RoadmapBgWrapper>
      <Styled.RoadmapContent>{roadmapData}</Styled.RoadmapContent>
    </Styled.RoadmapWrapper>
  );
};
