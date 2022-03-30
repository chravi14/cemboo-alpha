import React from "react";
import { RegistrationForm } from "../../components";

import * as Styled from "./register-page.styled";

export const RegistrationPage = () => {
  return (
    <Styled.LoginPageContainer>
      <Styled.LoginPageRow>
        <Styled.PackageInfoCol md={5}></Styled.PackageInfoCol>
        <Styled.RegistrationCol md={7}>
          <RegistrationForm />
        </Styled.RegistrationCol>
      </Styled.LoginPageRow>
    </Styled.LoginPageContainer>
  );
};
