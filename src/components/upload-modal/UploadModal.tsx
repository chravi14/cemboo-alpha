import React from "react";

import { FullScreenModal } from "../../libs";

import { UploadModalHeader } from "./upload-modal-header";
import { UploadModalBody } from "./upload-modal-body";
import { ContentTypes, IUploadedFile } from "./types";

interface IUploadModalProps {
  show?: boolean;
  onHide?: () => void;
  uploadedFile: IUploadedFile;
}

export const UploadModal: React.FC<IUploadModalProps> = ({
  onHide,
  show,
  uploadedFile,
}) => {
  const [contentType, setContentType] = React.useState<ContentTypes>(
    ContentTypes.UPLOAD_DETAILS
  );

  const contentTypeChangeHandler = React.useCallback(
    (selectedContentType: ContentTypes) => {
      setContentType(selectedContentType);
      console.log("Clicked", selectedContentType);
    },
    []
  );

  const handleModalHide = React.useCallback(() => {
    if (onHide) {
      onHide();
    }
    setContentType(ContentTypes.UPLOAD_DETAILS);
  }, [onHide]);

  const handleUploadDetailsSubmit = React.useCallback((uploadDetails) => {
    console.log(uploadDetails);
  }, []);

  const handleContinueToNextSection = React.useCallback(() => {
    if (contentType === ContentTypes.UPLOAD_DETAILS) {
      setContentType(ContentTypes.UPLOAD_LANGUAGE_CC);
    } else if (contentType === ContentTypes.UPLOAD_LANGUAGE_CC) {
      setContentType(ContentTypes.UPLOAD_CAST);
    } else if (contentType === ContentTypes.UPLOAD_CAST) {
      setContentType(ContentTypes.UPLOAD_SPONSORS);
    } else if (contentType === ContentTypes.UPLOAD_SPONSORS) {
      setContentType(ContentTypes.UPLOAD_VISIBILITY);
    } else {
      console.log("Final Section");
    }
  }, [contentType]);

  return (
    <FullScreenModal
      show={show}
      onHide={handleModalHide}
      header={
        <UploadModalHeader
          onStepClick={contentTypeChangeHandler}
          contentType={contentType}
        />
      }
      body={
        <UploadModalBody
          contentType={contentType}
          uploadedFile={uploadedFile}
          onUploadDetailsSubmit={handleUploadDetailsSubmit}
          onContinueToNextSection={handleContinueToNextSection}
        />
      }
    ></FullScreenModal>
  );
};
