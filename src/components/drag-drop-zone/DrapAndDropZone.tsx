import React, { useCallback, useMemo } from "react";
import { Image } from "react-bootstrap";
import { useDropzone } from "react-dropzone";

import { FileWithPreview } from "../../libs";
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
  onDropHandler: (files: FileWithPreview[]) => void;
  direction?: "horizontal" | "vertical";
  showSmallImage?: boolean;
  textAlign?: "center" | "left";
  centerContent?: boolean;
  onInvalidFormatError?: () => void;
}

export const DragAndDropZone: React.FC<IProps> = ({
  acceptedFileType,
  dropMessageText,
  onDropHandler,
  direction = "horizontal",
  showSmallImage = false,
  centerContent = false,
  textAlign = "center",
  onInvalidFormatError,
}) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        const filesWithPreviewUrl = acceptedFiles.map((file: File) =>
          Object.assign(
            {},
            {
              file: file,
              previewUrl: URL.createObjectURL(file),
            }
          )
        );
        onDropHandler(filesWithPreviewUrl);
      } else {
        if (onInvalidFormatError) {
          onInvalidFormatError();
        }
      }
    },
    [onDropHandler, onInvalidFormatError]
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
        textAlign={textAlign}
        direction={direction}
        gap={3}
        className={centerContent ? "col-md-5 mx-auto" : ""}
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
