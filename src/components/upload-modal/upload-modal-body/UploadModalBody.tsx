import React from "react";
import { UploadPreview } from "./upload-preview";

import { CastDetails } from "./cast";
import { DetailsSection } from "./details";
import { LanguageDetails } from "./language-and-cc";
import { SponsorDetails } from "./sponsors";
import { VisibilityDetails } from "./visibility";

import { ContentTypes } from "./../types";
import * as Styled from "./UploadModalBody.styled";

interface IUploadModalBodyProps {
  contentType?: ContentTypes;
  uploadedFile: File;
}

export const UploadModalBody: React.FC<IUploadModalBodyProps> = ({
  contentType = ContentTypes.UPLOAD_DETAILS,
  uploadedFile,
}) => {
  const body: { [key in ContentTypes]: React.ReactNode } = {
    [ContentTypes.UPLOAD_DETAILS]: <DetailsSection />,
    [ContentTypes.UPLOAD_LANGUAGE_CC]: <LanguageDetails />,
    [ContentTypes.UPLOAD_CAST]: <CastDetails />,
    [ContentTypes.UPLOAD_SPONSORS]: <SponsorDetails />,
    [ContentTypes.UPLOAD_VISIBILITY]: <VisibilityDetails />,
  };

  return (
    <Styled.UploadBodyWrapper>
      <Styled.UploadBodyWrapperRow>
        <Styled.UploadFormWrapper lg={4}>
          {body[contentType]}
        </Styled.UploadFormWrapper>
        <Styled.UploadPreviewWrapper lg={8}>
          <UploadPreview uploadedFile={uploadedFile} />
        </Styled.UploadPreviewWrapper>
      </Styled.UploadBodyWrapperRow>
    </Styled.UploadBodyWrapper>
  );
};
