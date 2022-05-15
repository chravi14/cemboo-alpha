import styled from "styled-components";

import { colors, types } from "../../../libs";

export const WelcomeHeader = styled.h2`
  ${types.headers.secondary};
  background: ${colors.text.textGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 10px;
`;

export const WelcomeHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 10px;
`;

export const BackToUploadsText = styled.p`
  ${types.body.normal};
  color: ${colors.text.green};
  border-bottom: 2px solid ${colors.text.green};
  cursor: pointer;
`;
