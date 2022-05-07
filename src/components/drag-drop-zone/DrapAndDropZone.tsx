import React, { useCallback, useMemo } from "react";
import { Image } from "react-bootstrap";
import { useDropzone } from "react-dropzone";

import DragAndDropImage from "./../../assets/images/upload-image.svg";
import SmallDrapAndDropImage from "./../../assets/images/draganddrop.svg";

import * as Styled from "./DrapAndDropZone.styled";

const activeStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

interface IProps {
  acceptedFileType: string;
  dropMessageText?: string;
  onDropHandler: (files: File[]) => void;
  direction?: "horizontal" | "vertical";
  showSmallImage?: boolean;
}

export const DragAndDropZone: React.FC<IProps> = ({
  acceptedFileType,
  dropMessageText,
  onDropHandler,
  direction = "horizontal",
  showSmallImage = false,
}) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      console.log(acceptedFiles);
      onDropHandler(acceptedFiles);
    },
    [onDropHandler]
  );

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: acceptedFileType,
    // accept: "image/jpeg, image/png",
  });

  const style = useMemo(
    () => ({
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  return (
    <Styled.DragAndDropZoneWrapper {...getRootProps({ style })}>
      <input {...getInputProps()} />
      <Styled.DragAndDropZoneTextWrapper
        direction={direction}
        gap={3}
        className={!showSmallImage ? "col-md-5 mx-auto" : ""}
      >
        <Image
          src={showSmallImage ? SmallDrapAndDropImage : DragAndDropImage}
        />
        <Styled.DragAndDropZoneText>
          {dropMessageText
            ? dropMessageText
            : "Drag and drop a subtitle files here or choose them (*.srt)"}
          .
        </Styled.DragAndDropZoneText>
      </Styled.DragAndDropZoneTextWrapper>
    </Styled.DragAndDropZoneWrapper>
  );
};
