import * as Styled from "./judge-item.styled";
import { CustomBoldText, CustomLightText } from "../../../ui/typography/";
import { IJudge } from "./../type";

export const JudgeItem: React.FC<IJudge> = ({
  id,
  name,
  bio,
  role,
  imageUrl,
}) => {
  return (
    <Styled.JudgeItemWrapper>
      <Styled.JudgeItemImage src={imageUrl} />
      <Styled.JudgeItemBioWrapper>
        <CustomBoldText>
          <Styled.CustomLinkNewTab target="_blank" href={bio}>
            {name}
          </Styled.CustomLinkNewTab>
        </CustomBoldText>
        <CustomLightText size={14}>{role}</CustomLightText>
      </Styled.JudgeItemBioWrapper>
    </Styled.JudgeItemWrapper>
  );
};
