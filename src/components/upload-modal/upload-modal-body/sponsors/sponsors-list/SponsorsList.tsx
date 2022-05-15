import React from "react";
import { Image, Stack } from "react-bootstrap";
import { FileWithPreview } from "../../../../../libs";

import * as Styled from "./SponsorsList.styled";

export const SponsorsList: React.FC<{
  sponsorsList: FileWithPreview[];
  onDelete: (index: number) => void;
}> = ({ sponsorsList, onDelete }) => {
  console.log(sponsorsList);
  const handleSponsorLogoDelete = React.useCallback(
    (index) => {
      onDelete(index);
    },
    [onDelete]
  );
  return (
    <Stack direction="horizontal" gap={2}>
      {sponsorsList.map((sponsor, index) => (
        <Styled.SponsorImageWrapper>
          <Image src={sponsor.previewUrl} width="100%" />
          <Styled.SponsorImageNumber>{index + 1}</Styled.SponsorImageNumber>
          <Styled.SponsorDeleteIcon
            variant="white"
            onClick={() => handleSponsorLogoDelete(index)}
          />
        </Styled.SponsorImageWrapper>
      ))}
    </Stack>
  );
};
