import { IPlayList, PublishStatus, Audience } from "./uploads";

export interface IUploadRequestDto {
  details: IDetailsDto;
  languageDetails: ILanguageDetailsDto;
  castDetails: ICastDto[];
  sponsorDetails?: ISponsorsDto[];
  status: PublishStatus;
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
  thumbailImagesPath?: string[];
}

export interface ISubtitleDto {
  subtitleFilePath: string;
  subtitleLanguage: string;
}

export interface ILanguageDetailsDto {
  videoLanguage: string;
  subtitles?: ISubtitleDto[];
}

export interface ICastDto {
  castName: string;
  roleName?: string;
  castImageFilePath?: string;
}

export interface ISponsorsDto {
  sponsorLogoFilePath: string;
}
