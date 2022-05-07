import React from "react";
import { RegistrationForm } from "../../components";
import { HeaderLogo } from "../../libs";

import * as Styled from "./register-page.styled";

export const RegistrationPage = () => {
  return (
    <Styled.RegistrationPageContainer>
      <Styled.RegistrationPageRow>
        <Styled.PackageInfoCol md={5}>
          <Styled.RegistrationHeader>
            <HeaderLogo />
          </Styled.RegistrationHeader>
        </Styled.PackageInfoCol>
        <Styled.RegistrationCol md={7}>
          <RegistrationForm />
        </Styled.RegistrationCol>
      </Styled.RegistrationPageRow>
    </Styled.RegistrationPageContainer>
  );
};
