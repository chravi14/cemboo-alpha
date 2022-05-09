import styled from "styled-components";
import { Button, Row, Stack } from "react-bootstrap";

import { types, colors, OuterContainer } from "./../../../../libs";

export const DetailsHeader = styled.h3`
  ${types.body.secondaryTitle};
  color: ${colors.text.white};
  margin-bottom: 10px;
`;

export const RequiredText = styled.p`
  ${types.body.small};
  color: ${colors.text.green};
  margin: 5px 0;
`;

export const FormFieldRow = styled(Row)`
  margin-bottom: 15px;
`;

export const ThumbnailSectionContainer = styled(OuterContainer)`
  margin: 15px 0;
  padding: 0;
`;

export const ThumbnailText = styled.p`
  font-size: 14px;
  color: rgba(159, 159, 159, 1);
`;

export const ThumbnailHeader = styled.h3`
  ${types.headers.small};
`;

export const AudienceSectionWrapper = styled.section`
  margin-top: 20px;
`;

export const AudienceHeader = styled.h5`
  ${types.headers.small};
`;

export const AudienceText = styled.p`
  ${types.body.normal};
  color: ${colors.text.mediumWhite};
  margin: 5px 0;
`;

export const AudienceRadioInputWrapper = styled(Stack)`
  margin-top: 10px;
`;

export const ShowMoreOrLessText = styled.p`
  ${types.body.small};
  color: ${colors.text.green};
  cursor: pointer;
  margin: 10px 0;
`;

export const SelectFieldWrapper = styled(Stack)`
  margin-top: 10px;
`;

export const SelectFieldHeader = styled.h5`
  ${types.headers.small};
`;

export const SelectFieldText = styled.p`
  ${types.body.small};
  color: ${colors.text.mediumWhite};
  margin: 5px 0;
`;

export const ContinueBtn = styled(Button)`
  background: rgba(255, 255, 255, 0.5);
  border: none;
  width: 100%;
  outline: none;
  margin-top: 20px;

  ${types.body.normal};
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;
