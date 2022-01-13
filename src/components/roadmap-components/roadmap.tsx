import * as Styled from "./roadmap.styled";
import RoadmapImage from "./../../assets/images/roadmap.png";

export const RoadmapContainer = () => {
  return (
    <Styled.RoadmapWrapper>
      <Styled.RoadmapHeader>Cemboo Roadmap</Styled.RoadmapHeader>
      {/* <Styled.RoadmapImageWrapper>
        <Styled.RoadmapImageOne></Styled.RoadmapImageOne>
        <Styled.RoadmapImageTwo>
          <Styled.RoadmapText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </Styled.RoadmapText>
        </Styled.RoadmapImageTwo>
      </Styled.RoadmapImageWrapper> */}
      <Styled.RoadmapImageWrapper>
        <Styled.RoadmapFirstImage src={RoadmapImage} />
      </Styled.RoadmapImageWrapper>
      <Styled.RoadmapTextWrapper>
        <Styled.RoadmapTextHeader>Q4 2021</Styled.RoadmapTextHeader>
        <Styled.RoadmapText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </Styled.RoadmapText>
      </Styled.RoadmapTextWrapper>
      <Styled.RoadmapTextWrapper>
        <Styled.RoadmapTextHeader>Q4 2021</Styled.RoadmapTextHeader>
        <Styled.RoadmapText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </Styled.RoadmapText>
      </Styled.RoadmapTextWrapper>
      <Styled.RoadmapTextWrapper>
        <Styled.RoadmapTextHeader>Q4 2021</Styled.RoadmapTextHeader>
        <Styled.RoadmapText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </Styled.RoadmapText>
      </Styled.RoadmapTextWrapper>
    </Styled.RoadmapWrapper>
  );
};
