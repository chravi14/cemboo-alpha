import { IBase64FormatFile } from "../models";

export const replaceLocation = (url: string) => {
  window.location.replace(url);
};

export const isLinkActive = (linkPath: string) => {
  return window.location.pathname === linkPath;
};

export const convertFileToBlob = (file: File): Promise<IBase64FormatFile> =>
  new Promise(async (resolve, reject) => {
    // const response = await fileTypeFromFile(file.webkitRelativePath);
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event?.target) {
        const fileToUploadFormat = {
          base64: event.target.result,
          fileName: file.name.replace(/ /g, "-"),
          fileType: file.type,
          fileExt: file.name.split(".")[1],
        };
        resolve(fileToUploadFormat);
      } else {
        reject("There is an error in converting file to blob");
      }
    };
    reader.readAsDataURL(file);
  });
