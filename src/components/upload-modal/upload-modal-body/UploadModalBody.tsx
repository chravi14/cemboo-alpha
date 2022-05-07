import React from "react";
import { UploadPreview } from "./upload-preview";

import { CastDetails } from "./cast";
import { DetailsSection } from "./details";
import { LanguageDetails } from "./language-and-cc";

import { ContentTypes } from "./../types";
import * as Styled from "./UploadModalBody.styled";

interface IUploadModalBodyProps {
  contentType?: ContentTypes;
}

export const UploadModalBody: React.FC<IUploadModalBodyProps> = ({
  contentType = ContentTypes.UPLOAD_DETAILS,
}) => {
  const body: { [key in ContentTypes]: React.ReactNode } = {
    [ContentTypes.UPLOAD_DETAILS]: <DetailsSection />,
    [ContentTypes.UPLOAD_LANGUAGE_CC]: <LanguageDetails />,
    [ContentTypes.UPLOAD_CAST]: <CastDetails />,
    [ContentTypes.UPLOAD_SPONSORS]: <h1>Sponsor Details</h1>,
    [ContentTypes.UPLOAD_VISIBILITY]: <h1>Publish Details</h1>,
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
