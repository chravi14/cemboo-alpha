import React from "react";
import { IUpload } from "../../../libs";

import * as Styled from "./UploadsContent.styled";

const UploadsContent: React.FC<{ clientUploads: IUpload[] }> = ({
  clientUploads,
}) => {
  const uploadCardCols = clientUploads.map((item) => {
    return (
      <Styled.UploadCol md={3} key={item.id}>
        <Styled.UploadCard>
          <Styled.UploadCardImage
            src={item.details.thumbnails?.thumbnailImageCDNPath}
          />
          <Styled.UploadCardBody>
            <Styled.UploadCardTitle>
              {item.details.title}
            </Styled.UploadCardTitle>
            <Styled.UploadCardText>
              {new Date(item.createdAt).toLocaleDateString("en-us", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </Styled.UploadCardText>
          </Styled.UploadCardBody>
        </Styled.UploadCard>
      </Styled.UploadCol>
    );
  });

  return (
    <Styled.UploadContentWrapper>
      <Styled.UploadContentTitle>Recent Uploads</Styled.UploadContentTitle>
      <Styled.UploadsRow>{uploadCardCols}</Styled.UploadsRow>
    </Styled.UploadContentWrapper>
  );
};

export { UploadsContent };
