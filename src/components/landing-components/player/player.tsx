import * as Styled from "./player.styled";
import { config } from "../../../config/config";

export const Player = () => {
  return (
    <Styled.VideoElement controls loop>
      <source src={config.S3_VIDEO_URL} type="video/mp4" />
      Your browser does not support the video tag.
    </Styled.VideoElement>
  );
};
