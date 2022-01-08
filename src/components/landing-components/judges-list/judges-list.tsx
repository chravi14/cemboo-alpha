import { CustomSubHeader } from "../../ui";
import { JudgeItem } from "./judge-item";
import * as Styled from "./judges.styled";

export const JudgesList = () => {
  return (
    <Styled.JudgesWrapper>
      <CustomSubHeader>Meet the Judges</CustomSubHeader>
      <Styled.JudgesListWrapper>
        <JudgeItem />
        <JudgeItem />
        <JudgeItem />
        <JudgeItem />
        <JudgeItem />
        <JudgeItem />
        <JudgeItem />
      </Styled.JudgesListWrapper>
    </Styled.JudgesWrapper>
  );
};
