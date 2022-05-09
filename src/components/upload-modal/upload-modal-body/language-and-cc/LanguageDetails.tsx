import React from "react";
import { Form, Col } from "react-bootstrap";

import {
  SelectInput,
  BaseButton,
  ILanguageDetails,
  FileWithPreview,
  ISubtitle,
} from "./../../../../libs";

import { DragAndDropZone } from "./../../../drag-drop-zone";

import { SubtitleFile, SubtitleList } from "./subtitle-file";

import * as Styled from "./LanguageDetails.styled";

export const LanguageDetails: React.FC<{
  onLanguageDetailsSubmit: (languageDetails: ILanguageDetails) => void;
}> = ({ onLanguageDetailsSubmit }) => {
  const [isDisabled, setIsDisabled] = React.useState(true);
  const [uploadedFiles, setUploadedFiles] = React.useState<FileWithPreview[]>(
    []
  );
  const [subtitleFiles, setSubtitleFiles] = React.useState<ISubtitle[]>([]);
  const [showDragAndDropZone, setShowDragAndDropZone] = React.useState(false);
  const [
    showErrorForEmptySubtitleLanguage,
    setShowErrorForEmptySubtitleLanguage,
  ] = React.useState(false);

  const [uploadLanguage, setUploadLanguage] = React.useState("");

  const languageOptions = [
    {
      id: "1",
      value: "EN",
      label: "English",
    },
    {
      id: "2",
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
      setSubtitleFiles([]);
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
    (file: FileWithPreview, language: string, index: number) => {
      if (!language) {
        setShowErrorForEmptySubtitleLanguage(true);
        return;
      }
      const newFile: ISubtitle = {
        fileName: file.file.name,
        fileLanguage: language,
        subtitleFile: file,
      };
      setSubtitleFiles([...subtitleFiles, newFile]);
      handleFileDiscard(index);
    },
    [subtitleFiles, handleFileDiscard]
  );

  const uploadedFilesList = uploadedFiles.map((file, index) => (
    <SubtitleFile
      fileName={file.file.name}
      fileNumber={index + 1}
      onSave={(language) => handleFileSave(file, language, index)}
      onDelete={() => handleFileDiscard(index)}
    />
  ));

  const submittedFilesList = subtitleFiles.map((file, index) => {
    return (
      <SubtitleList fileName={file.fileName} fileLanguage={file.fileLanguage} />
    );
  });

  const handleLanguageSelect = React.useCallback((event) => {
    console.log(event);
    setUploadLanguage(event.target.value);
  }, []);

  const handleLanguageDetailsSubmit = React.useCallback(
    (event) => {
      event.preventDefault();
      const subtitles = subtitleFiles.map(
        ({ fileName, fileLanguage, subtitleFile }) => {
          return {
            fileName,
            fileLanguage,
            subtitleFile,
          };
        }
      );
      const languageDetails: ILanguageDetails = {
        language: uploadLanguage,
        subtitles,
      };
      onLanguageDetailsSubmit(languageDetails);
    },
    [onLanguageDetailsSubmit, subtitleFiles, uploadLanguage]
  );

  React.useEffect(() => {
    const checkFormValidity = () => {
      let hasErrors = false;
      if (!uploadLanguage) {
        hasErrors = true;
      }
      setIsDisabled(hasErrors);
    };
    checkFormValidity();
  }, [subtitleFiles, uploadLanguage]);

  return (
    <>
      <Styled.LanguageDetailsHeader>
        Language and Subtitles
      </Styled.LanguageDetailsHeader>
      <Styled.HelpText>
        Use the the field below to select your video's language and, if you want
        to use captions.
      </Styled.HelpText>
      <Form onSubmit={handleLanguageDetailsSubmit}>
        <Styled.RequiredText>* indicates required</Styled.RequiredText>
        <Styled.FormFieldRow>
          <Col>
            <SelectInput
              fieldName="language"
              fieldLabel="Language *"
              options={languageOptions}
              placeholder="Audio Language"
              fieldValue={uploadLanguage}
              onChangeHandler={handleLanguageSelect}
            />
          </Col>
        </Styled.FormFieldRow>
        <Styled.FormFieldRow>
          <Col>{subtitleFiles && submittedFilesList}</Col>
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
                textAlign="left"
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
              type="submit"
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
