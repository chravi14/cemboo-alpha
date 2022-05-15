import React from "react";

import {
  FullScreenModal,
  FileWithPreview,
  IUploadRequestDto,
  IUpload,
} from "../../libs";

import { UploadModalHeader } from "./upload-modal-header";
import { UploadModalBody } from "./upload-modal-body";
import { ContentTypes } from "./types";
import { fileUploadService } from "../../services";

interface IUploadModalProps {
  show?: boolean;
  onHide?: (newUpload?: IUpload) => void;
  uploadedFile: FileWithPreview;
  clientId?: string;
}

export const UploadModal: React.FC<IUploadModalProps> = ({
  onHide,
  show,
  uploadedFile,
  clientId,
}) => {
  const [contentType, setContentType] = React.useState<ContentTypes>(
    ContentTypes.UPLOAD_DETAILS
  );

  const contentTypeChangeHandler = React.useCallback(
    (selectedContentType: ContentTypes) => {
      setContentType(selectedContentType);
    },
    []
  );

  const handleModalHide = React.useCallback(
    (newUpload?: IUpload) => {
      if (onHide) {
        onHide(newUpload);
      }
      setContentType(ContentTypes.UPLOAD_DETAILS);
    },
    [onHide]
  );

  const handleUploadDetailsSubmit = React.useCallback(
    async (uploadDetails: IUploadRequestDto) => {
      console.log(uploadDetails);
      const response = await fileUploadService.uploadVideoWithMetaData(
        uploadDetails
      );
      console.log(response);
      handleModalHide(response);
    },
    [handleModalHide]
  );

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
          clientId={clientId}
          onUploadDetailsSubmit={handleUploadDetailsSubmit}
          onContinueToNextSection={handleContinueToNextSection}
        />
      }
    ></FullScreenModal>
  );
};
