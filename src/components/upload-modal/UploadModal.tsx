import React from "react";

import { FullScreenModal } from "../../libs";

import { UploadModalHeader } from "./upload-modal-header";
import { UploadModalBody } from "./upload-modal-body";
import { ContentTypes } from "./types";

interface IUploadModalProps {
  show?: boolean;
  onHide?: () => void;
}

export const UploadModal: React.FC<IUploadModalProps> = ({ onHide, show }) => {
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
      body={<UploadModalBody contentType={contentType} />}
    ></FullScreenModal>
  );
};
