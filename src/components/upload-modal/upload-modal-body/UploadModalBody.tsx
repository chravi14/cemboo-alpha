import React from "react";
import { UploadPreview } from "./upload-preview";

import { DetailsSection } from "./details";

import { CONTENT_TYPE } from "./constants";
import * as Styled from "./UploadModalBody.styled";

interface IUploadModalBodyProps {
  contentType?: CONTENT_TYPE;
}

export const UploadModalBody: React.FC<IUploadModalBodyProps> = ({
  contentType = CONTENT_TYPE.UPLOAD_DETAILS,
}) => {
  const body: { [key in CONTENT_TYPE]: React.ReactNode } = {
    [CONTENT_TYPE.UPLOAD_DETAILS]: <DetailsSection />,
    [CONTENT_TYPE.UPLOAD_LANGUAGE_CC]: <h1>Lang/CC Details</h1>,
    [CONTENT_TYPE.UPLOAD_CAST]: <h1>Cast Details</h1>,
    [CONTENT_TYPE.UPLOAD_SPONSORS]: <h1>Sponsor Details</h1>,
    [CONTENT_TYPE.UPLOAD_VISIBILITY]: <h1>Publish Details</h1>,
  };

  return (
    <Styled.UploadBodyWrapper>
      <Styled.UploadBodyWrapperRow>
        <Styled.UploadFormWrapper lg={4}>
          {body[contentType]}
        </Styled.UploadFormWrapper>
        <Styled.UploadPreviewWrapper lg={8}>
          <UploadPreview />
        </Styled.UploadPreviewWrapper>
      </Styled.UploadBodyWrapperRow>
    </Styled.UploadBodyWrapper>
  );
};
