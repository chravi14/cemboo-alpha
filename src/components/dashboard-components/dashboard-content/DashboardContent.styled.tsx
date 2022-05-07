import styled from "styled-components";

import { colors, types } from "../../../libs";

export const WelcomeHeader = styled.h2`
  ${types.headers.secondary};
  background: ${colors.text.textGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 10px;
`;
