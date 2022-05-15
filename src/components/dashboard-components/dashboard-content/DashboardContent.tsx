import React from "react";
import { FileWithPreview, IUpload } from "../../../libs";
import { UploadModal } from "../../upload-modal";
import { UploadsContent } from "../uploads-content";

import { DragAndDropZone } from "./../../drag-drop-zone";

import * as Styled from "./DashboardContent.styled";

export const DashboardContent: React.FC<{
  clientUploads: any;
  clientId?: string;
  showUploadContent?: boolean;
  showBackText?: boolean;
  onBackTextClick?: () => void;
  onUpdateUploads?: (newUpload: IUpload) => void;
}> = ({
  clientUploads,
  showUploadContent,
  showBackText,
  onBackTextClick,
  onUpdateUploads,
  clientId,
}) => {
  const [uploadedFiles, setUploadedFiles] = React.useState<FileWithPreview[]>(
    []
  );
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

  const onHideHandler = React.useCallback(
    (newUpload?: IUpload) => {
      setShowUploadModal(false);
      setUploadedFiles([]);
      if (onUpdateUploads && newUpload) {
        onUpdateUploads(newUpload);
      }
    },
    [onUpdateUploads]
  );

  return (
    <>
      <Styled.WelcomeHeaderWrapper>
        <Styled.WelcomeHeader>Welcome Ravi - {clientId}!</Styled.WelcomeHeader>
        {showBackText && (
          <Styled.BackToUploadsText onClick={onBackTextClick}>
            {" "}
            &#60; Back to Uploads
          </Styled.BackToUploadsText>
        )}
      </Styled.WelcomeHeaderWrapper>
      {clientUploads.length > 0 && !showUploadContent ? (
        <UploadsContent clientUploads={clientUploads} />
      ) : (
        <DragAndDropZone
          acceptedFileType="video/mp4"
          onDropHandler={handleOnDrop}
          direction="vertical"
          centerContent
          dropMessageText="Drag and drop or click to upload a movie"
          onInvalidFormatError={handleInvalidFormat}
        />
      )}

      <UploadModal
        show={showUploadModal}
        onHide={onHideHandler}
        clientId={clientId}
        uploadedFile={uploadedFiles[0]}
      />
    </>
  );
};
