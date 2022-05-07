import React from "react";

import { BaseButton, FloatingTextInput as TextInput } from "./../../libs";

import * as Styled from "./LoginForm.styled";

export const LoginForm = () => {
  const [isDisabled, setIsDisabled] = React.useState(true);
  const [loginUserDetails, setLoginUserDetails] = React.useState({
    email: "",
    password: "",
  });

  const validateRegUserDetails = React.useCallback(() => {
    if (loginUserDetails.email && loginUserDetails.password) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [loginUserDetails]);

  React.useEffect(() => {
    validateRegUserDetails();
  }, [validateRegUserDetails]);

  const handleInputChange = React.useCallback(
    (event) => {
      setLoginUserDetails({
        ...loginUserDetails,
        [event.target.name]: event.target.value,
      });
    },
    [loginUserDetails]
  );

  return (
    <Styled.LoginPageWrapper>
      <Styled.LoginPageHeader>Sign in to Cemboo</Styled.LoginPageHeader>
      <Styled.LoginForm>
        <Styled.LoginFormRow>
          <Styled.LoginFormCol>
            <TextInput
              label="Email Address"
              placeholder="Email Address"
              controlId="email"
              value={loginUserDetails.email}
              onChangeHandler={handleInputChange}
            />
          </Styled.LoginFormCol>
        </Styled.LoginFormRow>
        <Styled.LoginFormRow>
          <Styled.LoginFormCol>
            <TextInput
              label="Password"
              type="password"
              placeholder="Password"
              controlId="password"
              value={loginUserDetails.password}
              onChangeHandler={handleInputChange}
            />
          </Styled.LoginFormCol>
        </Styled.LoginFormRow>
        <Styled.LoginFormRow className="justify-content-end" sm={3}>
          <Styled.LoginFormCol>
            <Styled.ForgotPasswordText>
              Forgot your password?
            </Styled.ForgotPasswordText>
          </Styled.LoginFormCol>
        </Styled.LoginFormRow>

        <Styled.LoginFormRow>
          <Styled.LoginFormCol md={4}>
            <BaseButton
              variant={isDisabled ? "secondary" : "primary"}
              disabled={isDisabled}
            >
              Sign In
            </BaseButton>
          </Styled.LoginFormCol>
        </Styled.LoginFormRow>
      </Styled.LoginForm>
    </Styled.LoginPageWrapper>
  );
};
