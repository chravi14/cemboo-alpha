import React from "react";
import { Form, Col } from "react-bootstrap";

import { SelectInput, BaseButton } from "./../../../../libs";

import { DragAndDropZone } from "./../../../drag-drop-zone";

import { SubtitleFile, SubtitleList } from "./subtitle-file";

import * as Styled from "./LanguageDetails.styled";

interface ISubtitleFile {
  subtitleFile: File;
  subtitleLanguge: string;
}

export const LanguageDetails = () => {
  const [isDisabled, setIsDisabled] = React.useState(true);
  const [uploadedFiles, setUploadedFiles] = React.useState<File[]>([]);
  const [submittedFiles, setSubmittedFiles] = React.useState<ISubtitleFile[]>(
    []
  );
  const [showDragAndDropZone, setShowDragAndDropZone] = React.useState(false);
  const languageOptions = [
    {
      id: 1,
      value: "EN",
      label: "English",
    },
    {
      id: 2,
      value: "TCH",
      label: "Chinese",
    },
  ];

  const handleOnDrop = React.useCallback(
    (acceptedFiles) => {
      setUploadedFiles([...uploadedFiles, ...acceptedFiles]);
      console.log(uploadedFiles);
    },
    [uploadedFiles]
  );

  const handleSubtitleToggle = React.useCallback((event) => {
    setShowDragAndDropZone(event.target.checked);
    if (!event.target.checked) {
      setUploadedFiles([]);
      setSubmittedFiles([]);
    }
  }, []);

  const handleFileDiscard = React.useCallback(
    (index) => {
      if (index === 0) {
        setUploadedFiles([]);
      } else {
        setUploadedFiles([...uploadedFiles.splice(index, 1)]);
      }
    },
    [uploadedFiles]
  );

  const handleFileSave = React.useCallback(
    (file, language, index) => {
      const newFile = {
        subtitleFile: file,
        subtitleLanguge: language,
      };
      setSubmittedFiles([...submittedFiles, newFile]);
      handleFileDiscard(index);
    },
    [submittedFiles, handleFileDiscard]
  );

  const uploadedFilesList = uploadedFiles.map((file, index) => (
    <SubtitleFile
      fileName={file.name}
      fileNumber={index + 1}
      onSave={(language) => handleFileSave(file, language, index)}
      onDelete={() => handleFileDiscard(index)}
    />
  ));

  const submittedFilesList = submittedFiles.map((file, index) => {
    return (
      <SubtitleList
        fileName={file.subtitleFile.name}
        fileLanguage={file.subtitleLanguge}
      />
    );
  });

  return (
    <>
      <Styled.LanguageDetailsHeader>
        Language and Subtitles
      </Styled.LanguageDetailsHeader>
      <Styled.HelpText>
        Use the the field below to select your video's language and, if you want
        to use captions.
      </Styled.HelpText>
      <Form>
        <Styled.FormFieldRow>
          <Col>
            <SelectInput
              fieldName="genre"
              options={languageOptions}
              placeholder="Audio Language"
            />
          </Col>
        </Styled.FormFieldRow>
        <Styled.FormFieldRow>
          <Col>{submittedFiles && submittedFilesList}</Col>
        </Styled.FormFieldRow>
        <Styled.FormFieldRow>
          <Col>
            <Styled.SubtitleField>
              <Styled.FormSwitch
                type="switch"
                id="custom-switch"
                label={
                  showDragAndDropZone ? "Subtitiles: ON" : "Subtitiles: OFF"
                }
                onChange={handleSubtitleToggle}
              />
            </Styled.SubtitleField>
          </Col>
        </Styled.FormFieldRow>
        <Styled.FormFieldRow>
          <Col>{uploadedFiles.length > 0 && uploadedFilesList}</Col>
        </Styled.FormFieldRow>
        {showDragAndDropZone && (
          <Styled.FormFieldRow>
            <Col>
              <DragAndDropZone
                showSmallImage
                direction="horizontal"
                acceptedFileType=".srt"
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
