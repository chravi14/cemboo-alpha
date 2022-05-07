import React from "react";
import { Form, Col } from "react-bootstrap";

import {
  TextInput,
  TextAreaInput,
  SelectInput,
  RadioInput,
  BaseButton,
} from "./../../../../libs";

import { ThumbnailImagesSection } from "./thumbnail-images";

import * as Styled from "./Details.styled";

export const DetailsSection: React.FC = () => {
  const [isDisabled, setIsDisabled] = React.useState(true);

  const yearOptions = [
    {
      id: 1,
      value: "2001",
      label: "2001",
    },
    {
      id: 2,
      value: "2002",
      label: "2002",
    },
  ];

  const genreOptions = [
    {
      id: 1,
      value: "action",
      label: "Action",
    },
    {
      id: 2,
      value: "adventure",
      label: "Adventure",
    },
  ];

  return (
    <>
      <Styled.DetailsHeader>Details</Styled.DetailsHeader>
      <Form>
        <Styled.FormFieldRow>
          <Col>
            <TextInput
              fieldName="title"
              fieldLabel="Title"
              placeholder="Add a title for the video"
            />
          </Col>
        </Styled.FormFieldRow>
        <Styled.FormFieldRow>
          <Col>
            <TextAreaInput
              fieldName="description"
              fieldLabel="Description"
              placeholder="Tell viewers what the video is about"
            />
          </Col>
        </Styled.FormFieldRow>
        <Styled.FormFieldRow>
          <Col>
            <TextInput
              fieldName="directors"
              fieldLabel="Directors (use comma to separate values)"
              placeholder="Add all directors here"
            />
          </Col>
        </Styled.FormFieldRow>
        <Styled.FormFieldRow>
          <Col>
            <SelectInput
              fieldName="productionYear"
              fieldLabel="Production Year"
              options={yearOptions}
              placeholder="Click here to select year"
            />
          </Col>
        </Styled.FormFieldRow>
        <Styled.ThumbnailSectionContainer>
          <Styled.FormFieldRow>
            <Col>
              <Styled.ThumbnailHeader>Thumbnail Images</Styled.ThumbnailHeader>
            </Col>
          </Styled.FormFieldRow>
          <Styled.FormFieldRow>
            <Styled.ThumbnailText>
              Select or upload an image that reflects the content of the video.
              A good thumbnail stands out and attracts the attention of users.
            </Styled.ThumbnailText>
          </Styled.FormFieldRow>
          <ThumbnailImagesSection />
        </Styled.ThumbnailSectionContainer>
        <Styled.AudienceSectionWrapper>
          <Styled.AudienceHeader>Audience</Styled.AudienceHeader>
          <Styled.AudienceText>
            Please tell us which audience your film is intended for
          </Styled.AudienceText>
          <Styled.AudienceRadioInputWrapper direction="vertical" gap={3}>
            <RadioInput
              fieldValue={1}
              fieldLabel="G: General Audiences"
              fieldName="audience"
              fieldId="G"
            />
            <RadioInput
              fieldValue={2}
              fieldLabel="PG: Parental Guidance Suggested"
              fieldName="audience"
              fieldId="PG"
            />
            <RadioInput
              fieldValue={3}
              fieldLabel="PG-13: Parental Strongly Cautioned"
              fieldName="audience"
              fieldId="PG-13"
            />
            <RadioInput
              fieldValue={4}
              fieldId="R"
              fieldLabel="R: Restricted"
              fieldName="audience"
            />
            <RadioInput
              fieldValue={5}
              fieldId="NC-17"
              fieldLabel="NC-17: Clearly Adult"
              fieldName="audience"
            />
          </Styled.AudienceRadioInputWrapper>
        </Styled.AudienceSectionWrapper>

        <Styled.ShowMoreOrLessText>Show Less</Styled.ShowMoreOrLessText>
        <Styled.FormFieldRow>
          <Col>
            <TextInput
              fieldLabel="Producer/s  (use commas between each)"
              fieldName="producers"
              placeholder="Add all producers here"
            />
          </Col>
        </Styled.FormFieldRow>
        <Styled.FormFieldRow>
          <Col>
            <TextInput
              fieldLabel="IMDB Link"
              fieldName="imdbLink"
              placeholder="Add link here"
            />
          </Col>
        </Styled.FormFieldRow>
        <Styled.SelectFieldWrapper>
          <Styled.SelectFieldHeader>Genre</Styled.SelectFieldHeader>
          <Styled.SelectFieldText>
            Use the the field below to add as many genres as nedded.{" "}
          </Styled.SelectFieldText>
          <Styled.FormFieldRow>
            <Col>
              <SelectInput
                fieldName="genre"
                options={genreOptions}
                placeholder="Select Genre"
              />
            </Col>
          </Styled.FormFieldRow>
        </Styled.SelectFieldWrapper>
        <Styled.SelectFieldWrapper>
          <Styled.SelectFieldHeader>Playlists</Styled.SelectFieldHeader>
          <Styled.SelectFieldText>
            Add this video to one or more playlists so that users can discover
            your content more quickly.
          </Styled.SelectFieldText>
          <Styled.FormFieldRow>
            <Col>
              <SelectInput
                fieldName="playlists"
                options={yearOptions}
                placeholder="Select Playlist"
              />
            </Col>
          </Styled.FormFieldRow>
        </Styled.SelectFieldWrapper>
        <BaseButton
          variant={isDisabled ? "secondary" : "primary"}
          disabled={isDisabled}
        >
          Continue
        </BaseButton>
      </Form>
    </>
  );
};
