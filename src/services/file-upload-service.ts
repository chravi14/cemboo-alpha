import axios from "axios";

import {
  API_ROUTES,
  CEMBOO_GATEWAY_FILE_UPLOAD_DEV_ENDPOINT,
  IMetaData,
  IMediaConvertData,
  IUpload,
  IUploadRequestDto,
  IMetadataResponse,
  IPresignedUrlResponse,
} from "./../libs";

class FileUploadService {
  async uploadMetadata(metadata: IMetaData): Promise<IMetadataResponse> {
    const headers = {
      "content-type": "application/json",
    };

    const response = await axios.post(
      `${CEMBOO_GATEWAY_FILE_UPLOAD_DEV_ENDPOINT}/${API_ROUTES.METADATA_UPLOAD}`,
      metadata,
      { headers }
    );

    return response.data;
  }

  async getPresignedUrl(
    requestData: IMediaConvertData
  ): Promise<IPresignedUrlResponse> {
    const headers = {
      "content-type": "application/json",
    };

    const response = await axios.post(
      `${CEMBOO_GATEWAY_FILE_UPLOAD_DEV_ENDPOINT}/${API_ROUTES.MEDIA_CONVERT_PRESIGNED_URL}`,
      requestData,
      { headers }
    );

    return response.data;
  }

  async uploadMediaConvertFile(presignedUrl: string, file: File) {
    const response = await axios.put(presignedUrl, file, {
      headers: {
        "Content-Type": file.type,
      },
      onUploadProgress: (e) => {
        const percentCompleted = Math.round((e.loaded * 100) / e.total);
        console.log(percentCompleted, "Percent is");
      },
    });
    return response;
  }

  async uploadVideoWithMetaData(
    uploadDetails: IUploadRequestDto
  ): Promise<IUpload> {
    const headers = {
      "content-type": "application/json",
    };

    const response = await axios.post(
      `${CEMBOO_GATEWAY_FILE_UPLOAD_DEV_ENDPOINT}/${API_ROUTES.VIDEO_WITH_METADATA_UPLOAD}`,
      uploadDetails,
      { headers }
    );

    return response.data;
  }
}

export const fileUploadService = new FileUploadService();
