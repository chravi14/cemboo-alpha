import React from "react";

import { LoginForm } from "../../components";
import { HeaderLogo } from "../../libs";

import MiramaxLogo from "./../../assets/images/logos/miramax_logo.png";

import * as Styled from "./login-page.styled";

export const LoginPage = () => {
  return (
    <Styled.LoginPageContainer>
      <Styled.LoginPageRow>
        <Styled.LoginFormContainer md={8}>
          <Styled.LoginFormHeader>
            <HeaderLogo />
            <Styled.LoginPageRightNavWrapper>
              <Styled.RegistrationLinkText>
                Don't have an account?{" "}
                <Styled.RegistrationLinkButton
                  variant="outline-secondary"
                  size="sm"
                >
                  Sign Up
                </Styled.RegistrationLinkButton>
              </Styled.RegistrationLinkText>
            </Styled.LoginPageRightNavWrapper>
          </Styled.LoginFormHeader>
          <Styled.LoginFormWrapper>
            <LoginForm />
          </Styled.LoginFormWrapper>
        </Styled.LoginFormContainer>
        <Styled.LoginPageImageContainer md={4}>
          <Styled.LoginPageImageTextWrapper>
            <Styled.LoginPageImageTextHeader>
              "Praesent eu lobortis risus aliquam erat lutpat. Cras at orci
              velit mollis rhoncus."
            </Styled.LoginPageImageTextHeader>
            <Styled.LoginPageImageTextLogo src={MiramaxLogo} />
          </Styled.LoginPageImageTextWrapper>
        </Styled.LoginPageImageContainer>
      </Styled.LoginPageRow>
    </Styled.LoginPageContainer>
  );
};
