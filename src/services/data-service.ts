import axios from "axios";
import {
  CEMBOO_GATEWAY_FILE_UPLOAD_DEV_ENDPOINT,
  API_ROUTES,
  IUpload,
} from "../libs";

class DataService {
  async getUserUploads(clientId: string): Promise<IUpload[]> {
    const headers = {
      "content-type": "application/json",
    };

    const response = await axios.post(
      `${CEMBOO_GATEWAY_FILE_UPLOAD_DEV_ENDPOINT}/${API_ROUTES.GET_USER_UPLOADS}`,
      { clientId },
      { headers }
    );
    console.log(response);
    return response.data.uploads;
  }
}

export const dataService = new DataService();
