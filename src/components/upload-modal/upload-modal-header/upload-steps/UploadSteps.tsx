import React from "react";
import { Stack } from "react-bootstrap";

import { ContentTypes } from "../../types";
import { StepIndicator } from "./../../../../libs";

import * as Styled from "./UploadSteps.styled";

interface IProps {
  contentType?: ContentTypes;
  onStepClick: (contentType: ContentTypes) => void;
}

export const UploadSteps: React.FC<IProps> = ({
  contentType = ContentTypes.UPLOAD_DETAILS,
  onStepClick,
}) => {
  const handleContentTypeChange = React.useCallback(
    (contentType: ContentTypes) => {
      onStepClick(contentType);
    },
    [onStepClick]
  );

  return (
    <Stack direction="horizontal" gap={5} className="justify-content-center">
      <StepIndicator
        stepName="Details"
        stepNumber={1}
        isActive={contentType === ContentTypes.UPLOAD_DETAILS}
        direction="row"
        onStepClick={() => handleContentTypeChange(ContentTypes.UPLOAD_DETAILS)}
      >
        <Styled.ConnectorLine />
      </StepIndicator>

      <StepIndicator
        stepName="Language/CC"
        stepNumber={2}
        isActive={contentType === ContentTypes.UPLOAD_LANGUAGE_CC}
        direction="row"
        onStepClick={() =>
          handleContentTypeChange(ContentTypes.UPLOAD_LANGUAGE_CC)
        }
      >
        <Styled.ConnectorLine />
      </StepIndicator>
      <StepIndicator
        stepName="Cast"
        stepNumber={3}
        direction="row"
        isActive={contentType === ContentTypes.UPLOAD_CAST}
        onStepClick={() => handleContentTypeChange(ContentTypes.UPLOAD_CAST)}
      >
        <Styled.ConnectorLine />
      </StepIndicator>
      <StepIndicator
        stepName="Sponsors"
        stepNumber={4}
        direction="row"
        isActive={contentType === ContentTypes.UPLOAD_SPONSORS}
        onStepClick={() =>
          handleContentTypeChange(ContentTypes.UPLOAD_SPONSORS)
        }
      >
        <Styled.ConnectorLine />
      </StepIndicator>
      <StepIndicator
        stepName="Visibility"
        stepNumber={5}
        direction="row"
        isActive={contentType === ContentTypes.UPLOAD_VISIBILITY}
        onStepClick={() =>
          handleContentTypeChange(ContentTypes.UPLOAD_VISIBILITY)
        }
      />
    </Stack>
  );
};
