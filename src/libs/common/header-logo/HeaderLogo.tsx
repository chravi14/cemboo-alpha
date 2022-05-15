import React from "react";

import CembooLogo from "./../../../assets/images/logos/logo.png";

import * as Styled from "./HeaderLogo.styled";

export const HeaderLogo: React.FC = () => {
  return (
    <Styled.HeaderLogoLink href="/">
      <Styled.HeaderLogoImage src={CembooLogo} />
    </Styled.HeaderLogoLink>
  );
};
