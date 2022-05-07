import React from "react";
import { Image, Stack } from "react-bootstrap";

import * as Styled from "./SponsorsList.styled";

export const SponsorsList: React.FC<{
  sponsorsList: File[];
  onDelete: (index: number) => void;
}> = ({ sponsorsList, onDelete }) => {
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
          <Image src={URL.createObjectURL(sponsor)} width={70} />
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
