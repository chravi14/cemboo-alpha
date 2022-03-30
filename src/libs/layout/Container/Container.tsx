import React from "react";

import * as Styled from "./Container.styled";

export const InnerContainer = Styled.PageInnerContainer;

export const OuterContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
  ...opts
}) => {
  return (
    <Styled.PageOuterContainer {...opts} fluid>
      {children}
    </Styled.PageOuterContainer>
  );
};
