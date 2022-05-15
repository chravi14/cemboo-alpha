export enum ContentTypes {
  UPLOAD_DETAILS = "UPLOAD_DETAILS",
  UPLOAD_LANGUAGE_CC = "UPLOAD_LANGUAGE_CC",
  UPLOAD_CAST = "UPLOAD_CAST",
  UPLOAD_SPONSORS = "UPLOAD_SPONSORS",
  UPLOAD_VISIBILITY = "UPLOAD_VISIBILITY",
}

export interface IUploadedFile extends File {
  previewUrl?: string;
}
