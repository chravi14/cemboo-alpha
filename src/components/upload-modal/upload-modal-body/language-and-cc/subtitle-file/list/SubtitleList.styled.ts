import styled from "styled-components";
import { Stack } from "react-bootstrap";
import { colors, types } from "../../../../../../libs";

export const SubtitleListContainer = styled(Stack)`
  padding: 10px;
  border: 1px solid rgba(255, 255, 255, 0.24);
  border-radius: 1px;
  margin-bottom: 10px;
`;

export const SubtitleInfo = styled.div`
  flex: 1;
`;

export const SubtitleLanguageText = styled.span`
  ${types.body.normal};
  color: ${colors.text.white};
  margin-right: 20px;
`;

export const SubtitleFileName = styled.span`
  ${types.body.normal};
  color: ${colors.text.white};
`;

export const SubtitleActions = styled.div``;
