import React from "react";
import { Form, Col } from "react-bootstrap";

import { BaseButton } from "./../../../../libs";

import { DragAndDropZone } from "../../../drag-drop-zone";

import { SponsorsList } from "./sponsors-list";

import * as Styled from "./SponsorDetail.styled";

export const SponsorDetails = () => {
  const [isDisabled, setIsDisabled] = React.useState(true);
  const [uploadedFiles, setUploadedFiles] = React.useState<File[]>([]);
  const [showDragAndDropZone, setShowDragAndDropZone] = React.useState(true);

  const handleOnDrop = React.useCallback(
    (acceptedFiles) => {
      setUploadedFiles([...uploadedFiles, ...acceptedFiles]);
    },
    [uploadedFiles]
  );

  const handleSponsorDelete = React.useCallback(
    (index) => {
      const updatedUploadedFilesList = [...uploadedFiles];
      updatedUploadedFilesList.splice(index, 1);
      setUploadedFiles(updatedUploadedFilesList);
    },
    [uploadedFiles]
  );

  React.useEffect(() => {
    if (uploadedFiles.length === 6) {
      setShowDragAndDropZone(false);
    } else {
      setShowDragAndDropZone(true);
    }
  }, [uploadedFiles]);

  return (
    <>
      <Styled.SponsorsDetailsHeader>Sponsors</Styled.SponsorsDetailsHeader>
      <Styled.HelpText>
        Upload all the images of the logos corresponding to the sponsors you
        want to appear on top of the video.
      </Styled.HelpText>
      <Form>
        {uploadedFiles.length > 0 && (
          <Styled.FormFieldRow>
            <Col>
              <SponsorsList
                sponsorsList={uploadedFiles}
                onDelete={handleSponsorDelete}
              />
            </Col>
          </Styled.FormFieldRow>
        )}
        {showDragAndDropZone && (
          <Styled.FormFieldRow>
            <Col>
              <DragAndDropZone
                showSmallImage
                direction="horizontal"
                textAlign="left"
                dropMessageText="Drag and drop images here or choose files."
                acceptedFileType="image/jpeg, image/png"
                onDropHandler={handleOnDrop}
              />
            </Col>
          </Styled.FormFieldRow>
        )}

        <Styled.FormFieldRow>
          <Col>
            <BaseButton
              variant={isDisabled ? "secondary" : "primary"}
              disabled={isDisabled}
            >
              Go Back
            </BaseButton>
          </Col>
          <Col>
            <BaseButton
              variant={isDisabled ? "secondary" : "primary"}
              disabled={isDisabled}
            >
              Continue
            </BaseButton>
          </Col>
        </Styled.FormFieldRow>
      </Form>
    </>
  );
};
