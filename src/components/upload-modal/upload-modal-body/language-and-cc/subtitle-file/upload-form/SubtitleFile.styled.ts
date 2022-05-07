import styled from "styled-components";
import { Stack } from "react-bootstrap";

import { colors, types } from "./../../../../../../libs";

export const SubtitleFileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 15px;
  justify-content: center;

  border: 1px solid rgba(255, 255, 255, 0.24);
  border-radius: 4px;
  margin: 15px 0;
`;

export const SubtitleFileNameAndOptionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SubtitleFileName = styled.h3`
  ${types.headers.small};
  color: ${colors.text.white};
  margin: 0;
`;

export const SubtitleFileOptions = styled.div``;

export const SubtitleDiscardText = styled.span<any>`
  ${types.body.small};
  color: ${colors.text.white};
  cursor: pointer;
`;

export const SubtitleSaveText = styled.span<any>`
  ${types.body.small};
  color: ${colors.background.green};
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
`;

export const SubtitleFileAndLanguageWrapper = styled(Stack)`
  padding: 10px;
`;

export const SubtitleFile = styled.div`
  background: #121419;
  color: rgba(255, 255, 255, 0.6);
  padding: 10px 40px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 1px;
  margin-right: 10px;
`;
