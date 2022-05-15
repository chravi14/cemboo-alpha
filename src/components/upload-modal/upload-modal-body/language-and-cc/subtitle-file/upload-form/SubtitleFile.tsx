import React from "react";
import { SelectInput } from "../../../../../../libs";

import * as Styled from "./SubtitleFile.styled";

interface ISubtitleFileProps {
  fileName: string;
  fileNumber: number;
  onSave: (language: string) => void;
  onDelete: () => void;
}

export const SubtitleFile: React.FC<ISubtitleFileProps> = ({
  fileName,
  fileNumber,
  onSave,
  onDelete,
}) => {
  const subtitleLanguageOptions = [
    {
      id: "1",
      label: "English",
      value: "EN",
    },
    {
      id: "2",
      label: "Chinese",
      value: "TCH",
    },
  ];

  const [subtitleLanguage, setSubtitleLanguage] = React.useState("");

  const handleLanguageSelect = React.useCallback((e) => {
    setSubtitleLanguage(e.target.value);
  }, []);

  const handleOnSave = React.useCallback(() => {
    onSave(subtitleLanguage);
  }, [onSave, subtitleLanguage]);

  return (
    <Styled.SubtitleFileWrapper>
      <Styled.SubtitleFileNameAndOptionsWrapper>
        <Styled.SubtitleFileName>File #{fileNumber}</Styled.SubtitleFileName>
        <Styled.SubtitleFileOptions>
          <Styled.SubtitleDiscardText onClick={onDelete}>
            Discard
          </Styled.SubtitleDiscardText>
          <Styled.SubtitleSaveText onClick={handleOnSave}>
            Save
          </Styled.SubtitleSaveText>
        </Styled.SubtitleFileOptions>
      </Styled.SubtitleFileNameAndOptionsWrapper>
      <Styled.SubtitleFileAndLanguageWrapper direction="horizontal" gap={1}>
        <Styled.SubtitleFile>{fileName}</Styled.SubtitleFile>
        <SelectInput
          fieldName="subtitleLanguage"
          placeholder="Subtitle Language"
          options={subtitleLanguageOptions}
          fieldValue={subtitleLanguage}
          onChangeHandler={handleLanguageSelect}
        />
      </Styled.SubtitleFileAndLanguageWrapper>
    </Styled.SubtitleFileWrapper>
  );
};
