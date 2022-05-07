import React from "react";
import { Image, OverlayTrigger, ListGroup } from "react-bootstrap";

import EditThumbnailImage from "./../../../../../assets/images/edit_thumbnail.svg";
import UploadIconImage from "./../../../../../assets/images/upload_icon.svg";

import * as Styled from "./ThumbnailImage.styled";

const ThumbnailImageSelectButton = () => {
  return (
    <OverlayTrigger
      trigger="click"
      placement="top"
      overlay={ThumbnailImageSelectOptions}
    >
      <Image src={EditThumbnailImage} width={110} />
    </OverlayTrigger>
  );
};

const ThumbnailImageSelectOptions = (
  <Styled.Popover>
    <Styled.PopoverBody>
      <ListGroup>
        <ListGroup.Item variant="secondary">
          <Styled.ListImage src={UploadIconImage} />
          Upload Image
        </ListGroup.Item>
        <ListGroup.Item variant="secondary">
          <Styled.ListImage src={UploadIconImage} />
          Choose from Video
        </ListGroup.Item>
      </ListGroup>
    </Styled.PopoverBody>
  </Styled.Popover>
);

export const ThumbnailImagesSection = () => {
  return (
    <Styled.ThumbnailImagesWrapper direction="horizontal" gap={2}>
      <ThumbnailImageSelectButton />
      <Image src={EditThumbnailImage} width={110} />
      <Image src={EditThumbnailImage} width={110} />
    </Styled.ThumbnailImagesWrapper>
  );
};
