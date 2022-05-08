import React from "react";

import { IUploadedFile } from "../../types";

import * as Styled from "./UploadPreview.styled";

export const UploadPreview: React.FC<{ uploadedFile: IUploadedFile }> = ({
  uploadedFile,
}) => {
  return (
    <Styled.VideoWrapper>
      <Styled.VideoPlayer width="400" controls>
        <source src={uploadedFile?.preview} id="video_here" />
        Your browser does not support HTML5 video.
      </Styled.VideoPlayer>
    </Styled.VideoWrapper>
  );
};
