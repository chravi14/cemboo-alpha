import React from "react";
import { Col } from "react-bootstrap";
import { BaseButton, TextInput } from "../../../libs";
import { RegistrationSteps } from "../registration-steps";

import * as Styled from "./RegistrationForm.styled";

export const RegistrationForm = () => {
  const [userDetails, setUserDetails] = React.useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const [isDisabled, setIsDisabled] = React.useState(true);

  const validateUserDetails = React.useCallback(() => {
    console.log(userDetails);
    if (
      userDetails.name &&
      userDetails.email &&
      userDetails.password &&
      userDetails.phoneNumber
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [userDetails]);

  React.useEffect(() => {
    validateUserDetails();
  }, [validateUserDetails, userDetails]);

  const handleInputChange = React.useCallback(
    (event) => {
      setUserDetails({
        ...userDetails,
        [event.target.name]: event.target.value,
      });
    },
    [userDetails]
  );

  return (
    <Styled.RegistrationWrapper>
      <RegistrationSteps />
      <Styled.RegitsrationFormWrapper>
        <Styled.RegistrationFormHeader>
          Join Cemboo
        </Styled.RegistrationFormHeader>
        <Styled.LoginText>
          Already have an account? <Styled.LoginLink>Log In</Styled.LoginLink>
        </Styled.LoginText>
        <Styled.RegistrationForm autoComplete="off">
          <Styled.RegisterFormRow>
            <Col md={7}>
              <TextInput
                label="Name/Organization"
                placeholder="Name/Organization"
                controlId="name"
                value={userDetails.name}
                onChangeHandler={handleInputChange}
              />
            </Col>
          </Styled.RegisterFormRow>
          <Styled.RegisterFormRow>
            <Col md={7}>
              <TextInput
                label="Email"
                type="email"
                placeholder="Email"
                controlId="email"
                value={userDetails.email}
                onChangeHandler={handleInputChange}
              />
            </Col>
          </Styled.RegisterFormRow>

          <Styled.RegisterFormRow>
            <Col md={7}>
              <TextInput
                label="Password"
                type="password"
                placeholder="Password"
                controlId="password"
                value={userDetails.password}
                onChangeHandler={handleInputChange}
              />
            </Col>
          </Styled.RegisterFormRow>

          <Styled.RegisterFormRow>
            <Col md={7}>
              <TextInput
                label="Phone Number"
                type="text"
                placeholder="Phone Number"
                controlId="phoneNumber"
                value={userDetails.phoneNumber}
                onChangeHandler={handleInputChange}
              />
            </Col>
          </Styled.RegisterFormRow>

          <Styled.RegisterFormRow>
            <Col md={7}>
              <Styled.TermsText>
                By joining Cemboo, you agree to our{" "}
                <Styled.TermsTextLink>Terms of Service </Styled.TermsTextLink>,{" "}
                <Styled.TermsTextLink>Privacy Policy </Styled.TermsTextLink>and{" "}
                <Styled.TermsTextLink>Cookie Policy</Styled.TermsTextLink>.
              </Styled.TermsText>
            </Col>
          </Styled.RegisterFormRow>

          <Styled.RegisterFormRow>
            <Col md={7}>
              <BaseButton
                variant={isDisabled ? "secondary" : "primary"}
                disabled={isDisabled}
              >
                Continue
              </BaseButton>
            </Col>
          </Styled.RegisterFormRow>
        </Styled.RegistrationForm>
      </Styled.RegitsrationFormWrapper>
    </Styled.RegistrationWrapper>
  );
};
