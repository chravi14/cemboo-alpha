import React from "react";
import { Image } from "react-bootstrap";

import DeleteIcon from "./../../../../../../assets/images/delete.svg";
import EditIcon from "./../../../../../../assets/images/edit.svg";
import SrtIcon from "./../../../../../../assets/images/srt.svg";

import * as Styled from "./SubtitleList.styled";

interface IProps {
  fileName: string;
  fileLanguage: string;
}

export const SubtitleList: React.FC<IProps> = ({ fileLanguage, fileName }) => {
  return (
    <Styled.SubtitleListContainer
      gap={3}
      direction="horizontal"
      className="justify-content-space-between"
    >
      <Image src={SrtIcon} width={30} />
      <Styled.SubtitleInfo>
        <Styled.SubtitleLanguageText>
          {fileLanguage}
        </Styled.SubtitleLanguageText>
        <Styled.SubtitleFileName>{fileName}</Styled.SubtitleFileName>
      </Styled.SubtitleInfo>
      <Styled.SubtitleActions>
        <Image src={DeleteIcon} width={30} />
        <Image src={EditIcon} width={30} />
      </Styled.SubtitleActions>
    </Styled.SubtitleListContainer>
  );
};
