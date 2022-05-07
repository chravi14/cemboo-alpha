import styled from "styled-components";
import { colors, types } from "../../../../../libs";

export const CastItemWrapper = styled.div`
  padding: 10px;
  border: 1px solid rgba(255, 255, 255, 0.24);
  border-radius: 4px;
  margin-bottom: 10px;
  align-items: center;
`;

export const CastName = styled.h3`
  ${types.body.normal};
  color: ${colors.text.white};
  margin-bottom: 0;
`;
