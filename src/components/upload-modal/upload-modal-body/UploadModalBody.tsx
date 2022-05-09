import React from "react";

import {
  ICast,
  IDetails,
  ILanguageDetails,
  ISponsor,
  IUpload,
  PublishStatus,
} from "../../../libs";

import { UploadPreview } from "./upload-preview";

import { CastDetails } from "./cast";
import { DetailsSection } from "./details";
import { LanguageDetails } from "./language-and-cc";
import { SponsorDetails } from "./sponsors";
import { VisibilityDetails } from "./visibility";

import { ContentTypes } from "./../types";
import * as Styled from "./UploadModalBody.styled";

interface IUploadModalBodyProps {
  contentType?: ContentTypes;
  uploadedFile: File;
  onUploadDetailsSubmit: (uploadDetails: IUpload) => void;
  onContinueToNextSection: () => void;
}

export const UploadModalBody: React.FC<IUploadModalBodyProps> = ({
  contentType = ContentTypes.UPLOAD_DETAILS,
  uploadedFile,
  onUploadDetailsSubmit,
  onContinueToNextSection,
}) => {
  const [uploadDetails, setUploadDetails] = React.useState<IUpload>();

  const [details, setDetails] = React.useState<IDetails>();
  const [languageDetails, setLanguageDetails] =
    React.useState<ILanguageDetails>();
  const [castDetails, setCastDetails] = React.useState<ICast[]>();
  const [sponsorDetails, setSponsorDetails] = React.useState<ISponsor[]>();

  const [visibilityStatus, setVisibilityStatus] =
    React.useState<PublishStatus>();

  const handleDetailsSubmit = React.useCallback(
    (details: IDetails) => {
      console.log(details);
      setDetails(details);
      onContinueToNextSection();
    },
    [onContinueToNextSection]
  );

  const handleLanguageDetailsSubmit = React.useCallback(
    (languageDetails: ILanguageDetails) => {
      console.log(languageDetails);
      setLanguageDetails(languageDetails);
      onContinueToNextSection();
    },
    [onContinueToNextSection]
  );

  const handleCastDetailsSubmit = React.useCallback(
    (castDetails: ICast[]) => {
      console.log(castDetails);
      setCastDetails(castDetails);
      onContinueToNextSection();
    },
    [onContinueToNextSection]
  );

  const handleSponsorDetailsSubmit = React.useCallback(
    (sponsorDetails: ISponsor[]) => {
      console.log(sponsorDetails);
      setSponsorDetails(sponsorDetails);
      onContinueToNextSection();
    },
    [onContinueToNextSection]
  );

  // const buildUploadData = React.useCallback(() => {
  //   if (details && languageDetails && castDetails && visibilityStatus) {
  //     setUploadDetails({
  //       details,
  //       language: languageDetails,
  //       cast: castDetails,
  //       sponsors: sponsorDetails,
  //       status: visibilityStatus,
  //     });
  //     onContinueToNextSection();
  //   }
  // }, [
  //   details,
  //   languageDetails,
  //   castDetails,
  //   visibilityStatus,
  //   sponsorDetails,
  //   onContinueToNextSection,
  // ]);

  const buildFilesDataForS3Upload = React.useCallback(() => {
    // collect all files - thumbnail images, subtitles, cast images, sponsor logos

    // Cast images
    const thumbnailImage = details?.thumbnailImages?.file;

    console.log(thumbnailImage);

    let allSubtitleFiles: File[] = [];

    // subtitles
    console.log(languageDetails);
    if (languageDetails?.subtitles && languageDetails?.subtitles.length > 0) {
      languageDetails?.subtitles?.forEach((item) => {
        if (item?.subtitleFile?.file) {
          allSubtitleFiles.push(item?.subtitleFile?.file);
        }
      });
    }

    console.log(allSubtitleFiles);

    // Cast images
    let allCastImages: File[] = [];

    if (castDetails) {
      castDetails.forEach((item) => {
        if (item.castImageFile) {
          allCastImages.push(item.castImageFile.file);
        }
      });
    }

    console.log(allCastImages);

    // Sponsor images
    let allSponsorLogos: File[] = [];

    if (sponsorDetails) {
      sponsorDetails.forEach((item) => {
        if (item.sponsorLogo) {
          allSponsorLogos.push(item.sponsorLogo.file);
        }
      });
    }

    console.log(allSponsorLogos);
  }, [languageDetails, castDetails, sponsorDetails, details]);

  const handleVisibilityDetailsSubmit = React.useCallback(
    (visibilityStatus: PublishStatus) => {
      setVisibilityStatus(visibilityStatus);
      buildFilesDataForS3Upload();
    },
    [buildFilesDataForS3Upload]
  );

  React.useEffect(() => {
    console.log(uploadDetails);
  }, [uploadDetails]);

  const body: { [key in ContentTypes]: React.ReactNode } = {
    [ContentTypes.UPLOAD_DETAILS]: (
      <DetailsSection onDetailsSubmit={handleDetailsSubmit} />
    ),
    [ContentTypes.UPLOAD_LANGUAGE_CC]: (
      <LanguageDetails onLanguageDetailsSubmit={handleLanguageDetailsSubmit} />
    ),
    [ContentTypes.UPLOAD_CAST]: (
      <CastDetails onCastDetailsSubmit={handleCastDetailsSubmit} />
    ),
    [ContentTypes.UPLOAD_SPONSORS]: (
      <SponsorDetails onSponsorsDetailsSubmit={handleSponsorDetailsSubmit} />
    ),
    [ContentTypes.UPLOAD_VISIBILITY]: (
      <VisibilityDetails
        onVisibilityDetailSubmit={handleVisibilityDetailsSubmit}
      />
    ),
  };

  return (
    <Styled.UploadBodyWrapper>
      <Styled.UploadBodyWrapperRow>
        <Styled.UploadFormWrapper lg={4}>
          {body[contentType]}
        </Styled.UploadFormWrapper>
        <Styled.UploadPreviewWrapper lg={8}>
          <UploadPreview uploadedFile={uploadedFile} />
        </Styled.UploadPreviewWrapper>
      </Styled.UploadBodyWrapperRow>
    </Styled.UploadBodyWrapper>
  );
};
