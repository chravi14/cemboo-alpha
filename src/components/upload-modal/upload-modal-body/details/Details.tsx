import React from "react";
import { Form, Col } from "react-bootstrap";

import {
  TextInput,
  TextAreaInput,
  SelectInput,
  RadioInput,
  BaseButton,
  IDetails,
  Audience,
  FileWithPreview,
} from "./../../../../libs";

import { ThumbnailImagesSection } from "./thumbnail-images";

import * as Styled from "./Details.styled";

export const DetailsSection: React.FC<{
  onDetailsSubmit: (details: IDetails) => void;
  details?: IDetails;
}> = ({ onDetailsSubmit, details }) => {
  const [isDisabled, setIsDisabled] = React.useState(true);
  const [uploadDetails, setUploadDetails] = React.useState<IDetails>(
    details
      ? { ...details }
      : {
          title: "",
          description: "",
          directors: "",
          producers: "",
          productionYear: "",
          genre: "",
          audience: Audience.GENERAL,
          playlist: {
            id: "",
            name: "",
          },
          imdbLink: "",
          thumbnails: undefined,
        }
  );

  const yearOptions = [
    {
      id: "1",
      value: "2001",
      label: "2001",
    },
    {
      id: "2",
      value: "2002",
      label: "2002",
    },
  ];

  const playListOptions = React.useMemo(
    () => [
      {
        id: "1",
        label: "Sports - Baseball",
        value: "Sports - Baseball",
        name: "Sports - Baseball",
      },
      {
        id: "2",
        label: "NFL League",
        value: "NFL League",
        name: "NFL League",
      },
    ],
    []
  );

  const genreOptions = React.useMemo(
    () => [
      {
        id: "1",
        value: "action",
        label: "Action",
      },
      {
        id: "2",
        value: "adventure",
        label: "Adventure",
      },
    ],
    []
  );

  const handleInputChange = React.useCallback(
    (event) => {
      setUploadDetails({
        ...uploadDetails,
        [event.target.name]: event.target.value,
      });
    },
    [uploadDetails]
  );

  const handlePlaylistChange = React.useCallback(
    (event) => {
      const playlistId = event.target.value;
      const playlistSelected = playListOptions.find(
        (playlist) => playlist.id === playlistId
      );
      setUploadDetails({
        ...uploadDetails,
        playlist: playlistSelected,
      });
    },
    [uploadDetails, playListOptions]
  );

  const handleGenreChange = React.useCallback(
    (event) => {
      const genreId = event.target.value;
      const genreSelected = genreOptions.find((genre) => genre.id === genreId);
      setUploadDetails({
        ...uploadDetails,
        genre: genreSelected?.id.toString(),
      });
    },
    [uploadDetails, genreOptions]
  );

  const handleThumbnailImageUpload = React.useCallback(
    (thumbnailImage: FileWithPreview) => {
      setUploadDetails({ ...uploadDetails, thumbnails: thumbnailImage });
    },
    [uploadDetails]
  );

  React.useEffect(() => {
    const checkFormValidity = () => {
      let hasErrors = false;
      if (
        !uploadDetails.title ||
        !uploadDetails.audience ||
        !uploadDetails.directors ||
        !uploadDetails.producers ||
        !uploadDetails.productionYear
      ) {
        hasErrors = true;
      }
      setIsDisabled(hasErrors);
    };
    checkFormValidity();
  }, [uploadDetails]);

  const handleFormSubmit = React.useCallback(
    (event) => {
      event.preventDefault();
      onDetailsSubmit(uploadDetails);
    },
    [uploadDetails, onDetailsSubmit]
  );

  return (
    <>
      <Styled.DetailsHeader>Details</Styled.DetailsHeader>
      <Form onSubmit={handleFormSubmit}>
        <Styled.RequiredText>* indicates required</Styled.RequiredText>
        <Styled.FormFieldRow>
          <Col>
            <TextInput
              fieldName="title"
              fieldLabel="Title *"
              placeholder="Add a title for the video"
              fieldValue={uploadDetails.title}
              onChangeHandler={handleInputChange}
            />
          </Col>
        </Styled.FormFieldRow>
        <Styled.FormFieldRow>
          <Col>
            <TextAreaInput
              fieldName="description"
              fieldLabel="Description"
              placeholder="Tell viewers what the video is about"
              fieldValue={uploadDetails.description}
              onChangeHandler={handleInputChange}
            />
          </Col>
        </Styled.FormFieldRow>
        <Styled.FormFieldRow>
          <Col>
            <TextInput
              fieldName="directors"
              fieldLabel="Directors (use comma to separate values) *"
              placeholder="Add all directors here"
              fieldValue={uploadDetails.directors}
              onChangeHandler={handleInputChange}
            />
          </Col>
        </Styled.FormFieldRow>
        <Styled.FormFieldRow>
          <Col>
            <SelectInput
              fieldName="productionYear"
              fieldLabel="Production Year *"
              options={yearOptions}
              fieldValue={uploadDetails.productionYear}
              onChangeHandler={handleInputChange}
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
          <ThumbnailImagesSection
            onThumbnailUpload={handleThumbnailImageUpload}
          />
        </Styled.ThumbnailSectionContainer>
        <Styled.AudienceSectionWrapper>
          <Styled.AudienceHeader>Audience *</Styled.AudienceHeader>
          <Styled.AudienceText>
            Please tell us which audience your film is intended for
          </Styled.AudienceText>
          <Styled.AudienceRadioInputWrapper direction="vertical" gap={3}>
            <RadioInput
              fieldLabel="G: General Audiences"
              fieldName="audience"
              fieldId="G"
              fieldValue={Audience.GENERAL}
              checked={uploadDetails.audience === Audience.GENERAL}
              onChangeHandler={handleInputChange}
            />
            <RadioInput
              fieldValue={Audience.PARENTAL_GUIDANCE}
              onChangeHandler={handleInputChange}
              fieldLabel="PG: Parental Guidance Suggested"
              fieldName="audience"
              checked={uploadDetails.audience === Audience.PARENTAL_GUIDANCE}
              fieldId="PG"
            />
            <RadioInput
              fieldValue={Audience.STRICT_PARENTAL_GUIDANCE}
              onChangeHandler={handleInputChange}
              fieldLabel="PG-13: Parental Strongly Cautioned"
              fieldName="audience"
              checked={
                uploadDetails.audience === Audience.STRICT_PARENTAL_GUIDANCE
              }
              fieldId="PG-13"
            />
            <RadioInput
              fieldValue={Audience.RESTRICTED}
              onChangeHandler={handleInputChange}
              fieldId="R"
              fieldLabel="R: Restricted"
              checked={uploadDetails.audience === Audience.RESTRICTED}
              fieldName="audience"
            />
            <RadioInput
              fieldValue={Audience.ADULT}
              onChangeHandler={handleInputChange}
              fieldId="NC-17"
              fieldLabel="NC-17: Clearly Adult"
              fieldName="audience"
              checked={uploadDetails.audience === Audience.ADULT}
            />
          </Styled.AudienceRadioInputWrapper>
        </Styled.AudienceSectionWrapper>

        <Styled.ShowMoreOrLessText>Show Less</Styled.ShowMoreOrLessText>
        <Styled.FormFieldRow>
          <Col>
            <TextInput
              fieldLabel="Producer/s  (use commas between each) *"
              fieldName="producers"
              placeholder="Add all producers here"
              fieldValue={uploadDetails.producers}
              onChangeHandler={handleInputChange}
            />
          </Col>
        </Styled.FormFieldRow>
        <Styled.FormFieldRow>
          <Col>
            <TextInput
              fieldLabel="IMDB Link"
              fieldName="imdbLink"
              placeholder="Add link here"
              fieldValue={uploadDetails.imdbLink}
              onChangeHandler={handleInputChange}
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
                fieldValue={uploadDetails.genre}
                onChangeHandler={handleGenreChange}
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
                fieldName="playlist"
                options={playListOptions}
                placeholder="Select Playlist"
                fieldValue={uploadDetails.playlist?.id}
                onChangeHandler={handlePlaylistChange}
              />
            </Col>
          </Styled.FormFieldRow>
        </Styled.SelectFieldWrapper>
        <BaseButton
          type="submit"
          variant={isDisabled ? "secondary" : "primary"}
          disabled={isDisabled}
        >
          Continue
        </BaseButton>
      </Form>
    </>
  );
};
