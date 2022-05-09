export interface IUpload {
  details: IDetails;
  language: ILanguageDetails;
  cast: ICast[];
  sponsors?: ISponsor[];
  status?: PublishStatus;
}

export interface IDetails {
  title: string;
  description?: string;
  directors: string;
  producers: string;
  productionYear: string;
  audience: Audience;
  imdbLink?: string;
  genre?: string;
  playlist?: IPlayList;
  thumbnailImages?: FileWithPreview;
}

export interface FileWithPreview {
  file: File;
  previewUrl?: string;
}

export interface ILanguageDetails {
  language: string;
  subtitles?: ISubtitle[];
}

export interface ICast {
  id?: string;
  name: string;
  castImageFile?: FileWithPreview;
  roleName?: string;
}

export interface ISponsor {
  id?: string;
  sponsorLogo: FileWithPreview;
}

export interface ISubtitle {
  id?: string;
  fileName: string;
  fileLanguage?: string;
  subtitleFile?: FileWithPreview;
}

export enum Audience {
  GENERAL = "GENERAL",
  ADULT = "ADULT",
  PARENTAL_GUIDANCE = "PARENTAL_GUIDANCE",
  STRICT_PARENTAL_GUIDANCE = "STRICT_PARENTAL_GUIDANCE",
  RESTRICTED = "RESTRICTED",
}

export interface IPlayList {
  id: string;
  name: string;
}

export enum PublishStatus {
  DRAFT = "DRAFT",
  SCHEDULED = "SCHEDULED",
  PUBLISHED = "PUBLISHED",
}
