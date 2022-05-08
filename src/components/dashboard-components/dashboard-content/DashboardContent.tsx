import React from "react";
import { UploadModal } from "../../upload-modal";

import { DragAndDropZone } from "./../../drag-drop-zone";

import * as Styled from "./DashboardContent.styled";

export const DashboardContent: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = React.useState<File[]>([]);
  const [showUploadModal, setShowUploadModal] = React.useState(false);

  const handleOnDrop = React.useCallback(
    (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        setUploadedFiles([...uploadedFiles, ...acceptedFiles]);
        setShowUploadModal(true);
      }
    },
    [uploadedFiles]
  );

  const handleInvalidFormat = React.useCallback(() => {
    alert("File format must be mp4.");
  }, []);

  const onHideHandler = React.useCallback(() => {
    setShowUploadModal(false);
    setUploadedFiles([]);
  }, []);

  return (
    <>
      <Styled.WelcomeHeader>Welcome Ravi!</Styled.WelcomeHeader>
      <DragAndDropZone
        acceptedFileType="video/mp4"
        onDropHandler={handleOnDrop}
        direction="vertical"
        centerContent
        dropMessageText="Drag and drop or click to upload a movie"
        onInvalidFormatError={handleInvalidFormat}
      />

      <UploadModal
        show={showUploadModal}
        onHide={onHideHandler}
        uploadedFile={uploadedFiles[0]}
      />
    </>
  );
};
