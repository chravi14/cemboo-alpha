import { IPlayList, PublishStatus, Audience } from "./uploads";

export interface IUpload {
  id: string;
  details: IDetailsDto;
  languageDetails: ILanguageDetailsDto;
  castDetails: ICastDto[];
  sponsorDetails?: ISponsorsDto[];
  status?: PublishStatus;
  video: IVideoRequestDto;
  clientId: string;
  createdAt: string;
}

export interface IUploadRequestDto {
  details: IDetailsDto;
  languageDetails: ILanguageDetailsDto;
  castDetails: ICastDto[];
  sponsorDetails?: ISponsorsDto[];
  status: PublishStatus;
  video: IVideoRequestDto;
  clientId: string;
}

export interface IVideoRequestDto {
  videoFileCDNPath: string;
  videoFileS3Path: string;
  videoFileName: string;
}

export interface IThumbnailRequestDto {
  thumbnailImageCDNPath: string;
  thumbnailImageS3Path: string;
  thumbnailImageFileName: string;
}

export interface IDetailsDto {
  title: string;
  description?: string;
  directors: string;
  producers: string;
  productionYear: string;
  audience: Audience;
  imdbLink?: string;
  genre?: string;
  playlist?: IPlayList;
  thumbnails?: IThumbnailRequestDto;
}

export interface ISubtitleDto {
  subtitleFileS3Path: string;
  subtitleLanguage: string;
  subtitleFileName: string;
  subtitleFileCDNPath: string;
}

export interface ILanguageDetailsDto {
  videoLanguage: string;
  subtitles?: ISubtitleDto[];
}

export interface ICastDto {
  castName: string;
  roleName?: string;
  castImageCDNPath: string;
  castImageFileName?: string;
  castImageS3Path?: string;
}

export interface ISponsorsDto {
  sponsorImageS3Path: string;
  sponsorFileName: string;
  sponsorImageCDNPath: string;
}

export interface IBase64FormatFile {
  base64: string | ArrayBuffer | null;
  fileName: string;
  fileType?: string;
  fileExt: string;
}

export interface IMetaData {
  clientId: string;
  sponsorLogos?: IBase64FormatFile[];
  subtitleFiles?: IBase64FormatFile[];
  thumbnailImage?: IBase64FormatFile;
  castImages: IBase64FormatFile[];
}

export interface IMediaConvertData {
  // fileName?: string;
  clientId?: string;
  contentType: string;
  ext?: string;
  isPublic: boolean;
}

export interface IMetadataGeneralResponse {
  cdnPath: string;
  s3Path: string;
}

export interface IMetadataResponse {
  sponsors?: IMetadataGeneralResponse[];
  cast: IMetadataGeneralResponse[];
  subtitles?: IMetadataGeneralResponse[];
  thumbnailImage?: IMetadataGeneralResponse;
}

export interface IPresignedUrlResponse {
  preSignedUrl: string;
  s3Path: string;
  distributionUrl: string;
}
