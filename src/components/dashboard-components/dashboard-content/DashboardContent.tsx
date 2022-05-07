import React from "react";
import { UploadModal } from "../../upload-modal";

import { DragAndDropZone } from "./../../drag-drop-zone";

import * as Styled from "./DashboardContent.styled";

export const DashboardContent: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = React.useState<File[]>([]);
  const [showUploadModal, setShowUploadModal] = React.useState(false);

  const handleOnDrop = React.useCallback(
    (acceptedFiles) => {
      setUploadedFiles([...uploadedFiles, ...acceptedFiles]);
      console.log(uploadedFiles);
      setShowUploadModal(true);
    },
    [uploadedFiles]
  );

  const onHideHandler = React.useCallback(() => {
    setUploadedFiles([]);
    setShowUploadModal(false);
  }, []);

  return (
    <>
      <Styled.WelcomeHeader>Welcome Ravi!</Styled.WelcomeHeader>
      <DragAndDropZone
        acceptedFileType="image/jpeg, image/png"
        onDropHandler={handleOnDrop}
        direction="vertical"
        centerContent
        dropMessageText="Drag and drop or click to upload a movie"
      />
      <UploadModal show={showUploadModal} onHide={onHideHandler} />
    </>
  );
};
