import React from "react";
import { Col } from "react-bootstrap";
import { BaseButton, FloatingTextInput as TextInput } from "../../../libs";
import { RegistrationSteps } from "../registration-steps";

import * as Styled from "./RegistrationForm.styled";

export const RegistrationForm = () => {
  const [isDisabled, setIsDisabled] = React.useState(true);
  const [regUserDetails, setRegUserDetails] = React.useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const validateRegUserDetails = React.useCallback(() => {
    if (
      regUserDetails.name &&
      regUserDetails.email &&
      regUserDetails.password &&
      regUserDetails.phoneNumber
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [regUserDetails]);

  React.useEffect(() => {
    validateRegUserDetails();
  }, [validateRegUserDetails]);

  const handleInputChange = React.useCallback(
    (event) => {
      setRegUserDetails({
        ...regUserDetails,
        [event.target.name]: event.target.value,
      });
    },
    [regUserDetails]
  );

  return (
    <Styled.RegistrationWrapper>
      <RegistrationSteps />
      <Styled.RegistrationFormWrapper>
        <Styled.RegistrationFormHeader>
          Join Cemboo
        </Styled.RegistrationFormHeader>
        <Styled.LoginText>
          Already have an account?{" "}
          <Styled.LoginLink href="/login">Log In</Styled.LoginLink>
        </Styled.LoginText>
        <Styled.RegistrationForm autoComplete="off">
          <Styled.RegisterFormRow>
            <Col md={7}>
              <TextInput
                label="Name/Organization"
                placeholder="Name/Organization"
                controlId="name"
                value={regUserDetails.name}
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
                value={regUserDetails.email}
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
                value={regUserDetails.password}
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
                value={regUserDetails.phoneNumber}
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
      </Styled.RegistrationFormWrapper>
    </Styled.RegistrationWrapper>
  );
};
