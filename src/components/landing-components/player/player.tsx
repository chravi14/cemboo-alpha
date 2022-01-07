import * as Styled from "./player.styled";
import Video from "./../../../assets/videos/video.mp4";

export const Player = () => {
  return (
    <Styled.VideoElement controls>
      <source src={Video} type="video/mp4" />
      Your browser does not support the video tag.
    </Styled.VideoElement>
  );
};
