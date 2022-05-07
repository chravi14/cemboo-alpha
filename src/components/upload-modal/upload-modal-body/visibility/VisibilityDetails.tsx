import React from "react";
import { Form, Col } from "react-bootstrap";

import { RadioInput, BaseButton } from "../../../../libs";

import * as Styled from "./VisibilityDetails.styled";

export const VisibilityDetails = () => {
  const [isDisabled, setIsDisabled] = React.useState(true);
  return (
    <>
      <Styled.VisibilityDetailsHeader>
        Visibility
      </Styled.VisibilityDetailsHeader>
      <Styled.HelpText>
        Choose when to publish and who can see your video. Don’t worry you’ll be
        able to change this afterwords.
      </Styled.HelpText>
      <Form>
        <Styled.FormFieldRow>
          <Col>
            <Styled.VisibilityOptionsWrapper direction="vertical" gap={3}>
              <RadioInput
                fieldValue={1}
                fieldLabel="Draft (Save it for later)"
                fieldName="status"
                fieldId="DRAFT"
              />
              <RadioInput
                fieldValue={2}
                fieldLabel="Public (Anyone with the video link can watch you video)"
                fieldName="status"
                fieldId="PUBLIC"
              />
              <RadioInput
                fieldValue={3}
                fieldLabel="Schedule (Select a date to make your video public)"
                fieldName="status"
                fieldId="SCHEDULED"
              />
            </Styled.VisibilityOptionsWrapper>
          </Col>
        </Styled.FormFieldRow>
        <Styled.FormFieldRow>
          <Col>
            <BaseButton
              variant={isDisabled ? "secondary" : "primary"}
              disabled={isDisabled}
            >
              Go Back
            </BaseButton>
          </Col>
          <Col>
            <BaseButton
              variant={isDisabled ? "secondary" : "primary"}
              disabled={isDisabled}
            >
              Continue
            </BaseButton>
          </Col>
        </Styled.FormFieldRow>
      </Form>
    </>
  );
};
