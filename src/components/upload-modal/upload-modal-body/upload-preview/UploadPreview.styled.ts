import styled from "styled-components";
import { colors } from "../../../../libs/themes/colors";

export const VideoWrapper = styled.div`
  height: 330px;
  width: 600px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
`;

export const VideoPlayer = styled.video`
  width: 100%;
  border: 1px solid;
  border-color: ${colors.text.green};
`;

export const VideoTitle = styled.h3`
  color: #fff;
`;
