import React from "react";
import { Image, OverlayTrigger, ListGroup } from "react-bootstrap";

import { BaseButton, FileWithPreview } from "../../../../../libs";

import EditThumbnailImage from "./../../../../../assets/images/edit_thumbnail.svg";
import UploadIconImage from "./../../../../../assets/images/upload_icon.svg";

import * as Styled from "./ThumbnailImage.styled";

// const ThumbnailImageSelectButton = () => {
//   return (
//     <OverlayTrigger
//       trigger="click"
//       placement="top"
//       overlay={ThumbnailImageSelectOptions}
//     >
//       <Image src={EditThumbnailImage} width={110} />
//     </OverlayTrigger>
//   );
// };

// const ThumbnailImageSelectOptions = (
//   <Styled.Popover>
//     <Styled.PopoverBody>
//       <ListGroup>
//         <ListGroup.Item variant="secondary">
//           <Styled.ListImage src={UploadIconImage} />
//           Upload Image
//         </ListGroup.Item>
//         <ListGroup.Item variant="secondary">
//           <Styled.ListImage src={UploadIconImage} />
//           Choose from Video
//         </ListGroup.Item>
//       </ListGroup>
//     </Styled.PopoverBody>
//   </Styled.Popover>
// );

export const ThumbnailImagesSection: React.FC<{
  onThumbnailUpload: (thumbnailImage: FileWithPreview) => void;
}> = ({ onThumbnailUpload }) => {
  const [thumbnailImage, setThumbnailImage] = React.useState<FileWithPreview>();

  const handleThumbnailImageUpload = React.useCallback(
    (event) => {
      const newThumbnail: FileWithPreview = {
        file: event.target.files[0],
        previewUrl: URL.createObjectURL(event.target.files[0]),
      };
      setThumbnailImage(newThumbnail);
      if (newThumbnail) {
        onThumbnailUpload(newThumbnail);
      }
    },
    [onThumbnailUpload]
  );

  return (
    <Styled.ThumbnailImagesWrapper direction="horizontal" gap={2}>
      {thumbnailImage ? (
        <Image src={thumbnailImage.previewUrl} width={110} />
      ) : (
        <>
          <Styled.UploadFromDeviceWrapper>
            <Styled.ThumbnailFileInput
              type="file"
              name="file"
              id="file"
              className="inputfile"
              onChange={handleThumbnailImageUpload}
            />
            <label htmlFor="file">Choose a file</label>
          </Styled.UploadFromDeviceWrapper>
          <Styled.OrText>(OR)</Styled.OrText>
          <Styled.ChooseFromVideoWrapper>
            <BaseButton variant="primary">Choose from Video</BaseButton>
          </Styled.ChooseFromVideoWrapper>
        </>
      )}
    </Styled.ThumbnailImagesWrapper>
  );
};
