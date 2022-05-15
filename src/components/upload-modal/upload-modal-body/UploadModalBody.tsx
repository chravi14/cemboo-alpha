import React from "react";

import {
  ICast,
  IDetails,
  ILanguageDetails,
  ISponsor,
  PublishStatus,
  convertFileToBlob,
  IBase64FormatFile,
  IMediaConvertData,
  FileWithPreview,
  IDetailsDto,
  ILanguageDetailsDto,
  ICastDto,
  ISponsorsDto,
  IUploadRequestDto,
} from "../../../libs";
import { fileUploadService } from "../../../services";

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
  uploadedFile: FileWithPreview;
  onUploadDetailsSubmit: (uploadDetails: IUploadRequestDto) => void;
  onContinueToNextSection: () => void;
  clientId?: string;
}

export const UploadModalBody: React.FC<IUploadModalBodyProps> = ({
  contentType = ContentTypes.UPLOAD_DETAILS,
  uploadedFile,
  onUploadDetailsSubmit,
  onContinueToNextSection,
  clientId,
}) => {
  const [details, setDetails] = React.useState<IDetails>();
  const [languageDetails, setLanguageDetails] =
    React.useState<ILanguageDetails>();
  const [castDetails, setCastDetails] = React.useState<ICast[]>([]);
  const [sponsorDetails, setSponsorDetails] = React.useState<ISponsor[]>([]);

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

  const convertFilesToBlobFormat = React.useCallback(async () => {
    // collect all files - thumbnail images, subtitles, cast images, sponsor logos

    let thumbnailImageBase64;
    if (details?.thumbnails?.file) {
      thumbnailImageBase64 = await convertFileToBlob(details?.thumbnails?.file);
    }

    let allSubtitleFiles: IBase64FormatFile[] = [];

    // subtitles
    if (languageDetails?.subtitles && languageDetails?.subtitles.length > 0) {
      for (const item of languageDetails?.subtitles) {
        const file = item.subtitleFile?.file;
        if (file) {
          const base64File = await convertFileToBlob(file);
          allSubtitleFiles.push(base64File);
        }
      }
    }

    // Cast images
    let allCastImages: IBase64FormatFile[] = [];

    if (castDetails) {
      for (const item of castDetails) {
        if (item.castImageFile) {
          const base64File = await convertFileToBlob(item.castImageFile.file);
          allCastImages.push(base64File);
        }
      }
    }

    // Sponsor images
    let allSponsorLogos: IBase64FormatFile[] = [];

    if (sponsorDetails) {
      for (const item of sponsorDetails) {
        if (item.sponsorLogo) {
          const base64File = await convertFileToBlob(item.sponsorLogo.file);
          allSponsorLogos.push(base64File);
        }
      }
    }

    return {
      sponsorLogos: [...allSponsorLogos],
      subtitleFiles: [...allSubtitleFiles],
      thumbnailImage: thumbnailImageBase64 ? thumbnailImageBase64 : undefined,
      castImages: [...allCastImages],
      clientId: clientId || "12345678",
    };
  }, [languageDetails, castDetails, sponsorDetails, details, clientId]);

  const uploadVideoFileToMediaConvertBucket = React.useCallback(async () => {
    // get presigned url based on name, contentType, extension and client Id
    const videoFileData: IMediaConvertData = {
      clientId: clientId || "9876543210",
      contentType: uploadedFile.file.type,
      ext: uploadedFile.file.name.split(".").pop(),
      isPublic: false,
    };

    const { preSignedUrl, s3Path, distributionUrl } =
      await fileUploadService.getPresignedUrl(videoFileData);

    if (preSignedUrl) {
      // upload video file through presigned url
      await fileUploadService.uploadMediaConvertFile(
        preSignedUrl,
        uploadedFile.file
      );
    }

    return {
      videoFileCDNPath: distributionUrl,
      videoFileName: uploadedFile.file.name,
      videoFileS3Path: s3Path,
    };
  }, [uploadedFile, clientId]);

  const uploadFilesToMetadataBucket = React.useCallback(async () => {
    const filesInBlobFormat = await convertFilesToBlobFormat();

    const { sponsors, subtitles, thumbnailImage, cast } =
      await fileUploadService.uploadMetadata(filesInBlobFormat);

    let primaryDetailsDto: IDetailsDto | undefined;
    let languageDetailsDto: ILanguageDetailsDto | undefined;
    let sponsorDetailsDto: ISponsorsDto[] | undefined;
    let castDetailsDto: ICastDto[] | undefined;

    if (details) {
      primaryDetailsDto = {
        ...details,
        thumbnails: {
          thumbnailImageCDNPath: thumbnailImage?.cdnPath || "",
          thumbnailImageS3Path: thumbnailImage?.s3Path || "",
          thumbnailImageFileName: details?.thumbnails?.file.name || "",
        },
      };
    }

    if (languageDetails) {
      languageDetailsDto = {
        videoLanguage: languageDetails.language,
        subtitles: subtitles
          ? subtitles.map((item, index) => {
              return {
                subtitleFileCDNPath: item.cdnPath,
                subtitleFileS3Path: item.s3Path,
                subtitleFileName: languageDetails.subtitles
                  ? languageDetails.subtitles[index].fileName
                  : "",
                subtitleLanguage: languageDetails.subtitles
                  ? languageDetails.subtitles[index].fileLanguage || ""
                  : "",
              };
            })
          : [],
      };
    }

    if (sponsors) {
      sponsorDetailsDto = sponsors.map((item, index) => {
        return {
          sponsorImageS3Path: item.s3Path,
          sponsorFileName: sponsorDetails[index].sponsorLogo.file.name,
          sponsorImageCDNPath: item.cdnPath,
        };
      });
    }

    if (cast) {
      castDetailsDto = cast.map((item, index) => {
        return {
          castImageCDNPath: item.cdnPath,
          castImageS3Path: item.s3Path,
          castImageFileName: castDetails[index].castImageFile?.file.name,
          castName: castDetails[index].name,
          roleName: castDetails[index].roleName,
        };
      });
    }

    if (primaryDetailsDto && languageDetailsDto && castDetailsDto) {
      return {
        detailsDto: primaryDetailsDto,
        languageDetailsDto: languageDetailsDto,
        sponsorDetailsDto: sponsorDetailsDto,
        castDetailsDto: castDetailsDto,
      };
    } else {
      return;
    }
  }, [
    convertFilesToBlobFormat,
    details,
    languageDetails,
    sponsorDetails,
    castDetails,
  ]);

  const handleVisibilityDetailsSubmit = React.useCallback(
    async (visibilityStatus: PublishStatus) => {
      setVisibilityStatus(visibilityStatus);
      // upload media file and metadata to separate buckets
      Promise.all([
        uploadVideoFileToMediaConvertBucket(),
        uploadFilesToMetadataBucket(),
      ]).then((results) => {
        console.log(results);
        if (results[0] && results[1]) {
          const uploadRequestDto: IUploadRequestDto = {
            video: {
              videoFileCDNPath: results[0].videoFileCDNPath,
              videoFileName: results[0].videoFileName,
              videoFileS3Path: results[0].videoFileS3Path,
            },
            details: results[1].detailsDto,
            languageDetails: results[1].languageDetailsDto,
            castDetails: results[1].castDetailsDto,
            sponsorDetails: results[1].sponsorDetailsDto,
            status: visibilityStatus || PublishStatus.DRAFT,
            clientId: clientId || "9876543210",
          };
          onUploadDetailsSubmit(uploadRequestDto);
        }
      });
    },
    [
      uploadVideoFileToMediaConvertBucket,
      uploadFilesToMetadataBucket,
      clientId,
      onUploadDetailsSubmit,
    ]
  );

  const body: { [key in ContentTypes]: React.ReactNode } = {
    [ContentTypes.UPLOAD_DETAILS]: (
      <DetailsSection onDetailsSubmit={handleDetailsSubmit} details={details} />
    ),
    [ContentTypes.UPLOAD_LANGUAGE_CC]: (
      <LanguageDetails
        onLanguageDetailsSubmit={handleLanguageDetailsSubmit}
        languageDetails={languageDetails}
      />
    ),
    [ContentTypes.UPLOAD_CAST]: (
      <CastDetails
        onCastDetailsSubmit={handleCastDetailsSubmit}
        castDetails={castDetails}
      />
    ),
    [ContentTypes.UPLOAD_SPONSORS]: (
      <SponsorDetails
        onSponsorsDetailsSubmit={handleSponsorDetailsSubmit}
        sponsorDetails={sponsorDetails}
      />
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
