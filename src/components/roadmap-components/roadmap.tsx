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
      <Styled.RoadmapImageWrapper>
        <Styled.RoadmapImageSection src={RoadmapImage} />
      </Styled.RoadmapImageWrapper>

      {/* <Styled.RoadmapContentWrapper>
        <Styled.RoadmapContentLine>
          <Styled.RoadmapLineContent>
            Call for entries for the Haydenfilms 5.0 Online Film Festival
            announcement
          </Styled.RoadmapLineContent>
          <Styled.RoadmapContentLineOuterPointer classNameName="first">
            <Styled.RoadmapContentLineInnerPointer classNameName="first"></Styled.RoadmapContentLineInnerPointer>
          </Styled.RoadmapContentLineOuterPointer>
          <Styled.RoadmapContentCirlce classNameName="first">
            Q1
          </Styled.RoadmapContentCirlce>
        </Styled.RoadmapContentLine>
        <Styled.RoadmapContentLine></Styled.RoadmapContentLine>
        <Styled.RoadmapContentLine></Styled.RoadmapContentLine>
        <Styled.RoadmapContentLine></Styled.RoadmapContentLine>
        <Styled.RoadmapContentLine></Styled.RoadmapContentLine>
        <Styled.RoadmapContentLine></Styled.RoadmapContentLine>
        <Styled.RoadmapContentLine></Styled.RoadmapContentLine>
      </Styled.RoadmapContentWrapper> */}
      {/* <Styled.RoadmapContent>{roadmapData}</Styled.RoadmapContent> */}
      <Styled.RoadmapContentContainer>
        <Styled.RoadmapContentMainWrapper>
          <Styled.RoadmapTextTitle>
            A insight into our roadmap
          </Styled.RoadmapTextTitle>
          <Styled.RoadmapContentList>
            <Styled.RoadmapContentListItem>
              <Styled.RoadmapContentTime>Q2 2022</Styled.RoadmapContentTime>
              <Styled.RoadmapContentText>
                Call for entries for the Haydenfilms 5.0 Online Film Festival
                announcement
              </Styled.RoadmapContentText>
            </Styled.RoadmapContentListItem>
            <Styled.RoadmapContentListItem>
              <Styled.RoadmapContentTime>Q3 2022</Styled.RoadmapContentTime>
              <Styled.RoadmapContentText>
                Cemboo Beta launches
              </Styled.RoadmapContentText>
            </Styled.RoadmapContentListItem>
            <Styled.RoadmapContentListItem>
              <Styled.RoadmapContentTime> Q4 2022</Styled.RoadmapContentTime>
              <Styled.RoadmapContentText>
                Official Submission Deadline for the Haydenfilms 5.0 Online Film
                Festival
              </Styled.RoadmapContentText>
            </Styled.RoadmapContentListItem>
            <Styled.RoadmapContentListItem>
              <Styled.RoadmapContentTime> Q1 2023</Styled.RoadmapContentTime>
              <Styled.RoadmapContentText>
                Cemboo Use Case(s) deploys
              </Styled.RoadmapContentText>
            </Styled.RoadmapContentListItem>
            <Styled.RoadmapContentListItem>
              <Styled.RoadmapContentTime> Q2 2023</Styled.RoadmapContentTime>
              <Styled.RoadmapContentText>
                Haydenfilms 5.0 Online Film Festival, presented by Cemboo, goes
                live
              </Styled.RoadmapContentText>
            </Styled.RoadmapContentListItem>
            <Styled.RoadmapContentListItem>
              <Styled.RoadmapContentTime> Q3 2023</Styled.RoadmapContentTime>
              <Styled.RoadmapContentText>
                Seed funding announcement
              </Styled.RoadmapContentText>
            </Styled.RoadmapContentListItem>
            <Styled.RoadmapContentListItem>
              <Styled.RoadmapContentTime> Q4 2023 </Styled.RoadmapContentTime>
              <Styled.RoadmapContentText>
                Haydenfilms 5.0 Film Festival Awards, presented by Cemboo
              </Styled.RoadmapContentText>
            </Styled.RoadmapContentListItem>
          </Styled.RoadmapContentList>
        </Styled.RoadmapContentMainWrapper>
      </Styled.RoadmapContentContainer>
    </Styled.RoadmapWrapper>
  );
};
