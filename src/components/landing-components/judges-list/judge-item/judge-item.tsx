import * as Styled from "./judge-item.styled";
import { CustomBoldText, CustomLightText } from "../../../ui/typography/";
import JudgeImage from "./../../../../assets/images/judges/judge.png";

export const JudgeItem = () => {
  return (
    <Styled.JudgeItemWrapper>
      <Styled.JudgeItemImage src={JudgeImage} />
      <Styled.JudgeItemBioWrapper>
        <CustomBoldText>Viktoria Decker</CustomBoldText>
        <CustomLightText size={14}>Senior Vice President,</CustomLightText>
        <CustomLightText size={14}>Development & Production.</CustomLightText>
      </Styled.JudgeItemBioWrapper>
    </Styled.JudgeItemWrapper>
  );
};
