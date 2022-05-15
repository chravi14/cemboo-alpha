import React from "react";

import { FileWithPreview } from "./../../../../libs";

import * as Styled from "./UploadPreview.styled";

export const UploadPreview: React.FC<{ uploadedFile: FileWithPreview }> = ({
  uploadedFile,
}) => {
  return (
    <Styled.VideoWrapper>
      <Styled.VideoPlayer width="400" controls>
        <source src={uploadedFile?.previewUrl} id="video_here" />
        Your browser does not support HTML5 video.
      </Styled.VideoPlayer>
    </Styled.VideoWrapper>
  );
};
