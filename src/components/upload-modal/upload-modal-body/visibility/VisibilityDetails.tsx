import React from "react";
import { Form, Col } from "react-bootstrap";

import { RadioInput, BaseButton, PublishStatus } from "../../../../libs";

import * as Styled from "./VisibilityDetails.styled";

export const VisibilityDetails: React.FC<{
  onVisibilityDetailSubmit: (status: PublishStatus) => void;
}> = ({ onVisibilityDetailSubmit }) => {
  const [isDisabled, setIsDisabled] = React.useState(true);
  const [visibilityStatus, setVisibilityStatus] =
    React.useState<PublishStatus>();

  const handleInputChange = React.useCallback((event) => {
    setVisibilityStatus(event.target.value);
    if (event.target.value) {
      setIsDisabled(false);
    }
  }, []);

  const handleVisibilityStatusSubmit = React.useCallback(
    (event) => {
      event.preventDefault();
      if (visibilityStatus) {
        onVisibilityDetailSubmit(visibilityStatus);
      }
    },
    [visibilityStatus, onVisibilityDetailSubmit]
  );
  return (
    <>
      <Styled.VisibilityDetailsHeader>
        Visibility *
      </Styled.VisibilityDetailsHeader>
      <Styled.HelpText>
        Choose when to publish and who can see your video. Don’t worry you’ll be
        able to change this afterwords.
      </Styled.HelpText>
      <Form onSubmit={handleVisibilityStatusSubmit}>
        <Styled.RequiredText>* indicates required</Styled.RequiredText>
        <Styled.FormFieldRow>
          <Col>
            <Styled.VisibilityOptionsWrapper direction="vertical" gap={3}>
              <RadioInput
                fieldLabel="Draft (Save it for later)"
                fieldName="status"
                fieldId="DRAFT"
                fieldValue={PublishStatus.DRAFT}
                onChangeHandler={handleInputChange}
              />
              <RadioInput
                fieldValue={PublishStatus.PUBLISHED}
                fieldLabel="Public (Anyone with the video link can watch you video)"
                fieldName="status"
                fieldId="PUBLIC"
                onChangeHandler={handleInputChange}
              />
              <RadioInput
                fieldValue={PublishStatus.SCHEDULED}
                fieldLabel="Schedule (Select a date to make your video public)"
                fieldName="status"
                fieldId="SCHEDULED"
                onChangeHandler={handleInputChange}
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
              type="submit"
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
