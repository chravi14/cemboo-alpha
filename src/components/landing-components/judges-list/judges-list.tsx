import { CustomSubHeader } from "../../ui";
import { JudgeItem } from "./judge-item";
import * as Styled from "./judges.styled";
import { JUDGES } from "../../../data/judges";
import { IJudge } from "./type";

export const JudgesList = () => {
  const judgesList = JUDGES.map((judge: IJudge) => (
    <JudgeItem key={judge.id} {...judge} />
  ));
  return (
    <Styled.JudgesWrapper>
      <CustomSubHeader>Meet the Judges</CustomSubHeader>
      <Styled.JudgesListWrapper>{judgesList}</Styled.JudgesListWrapper>
    </Styled.JudgesWrapper>
  );
};
