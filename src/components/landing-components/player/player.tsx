import * as Styled from "./player.styled";
import { config } from "../../../config/config";
import { useRef, useEffect } from "react";

declare global {
  interface Window {
    IVSPlayer: any;
  }
}

export const Player = () => {
  const playerRef = useRef();

  useEffect(() => {
    const IVSPlayer = window.IVSPlayer;
    if (IVSPlayer.isPlayerSupported) {
      const player = IVSPlayer.create();
      player.attachHTMLVideoElement(playerRef.current);
      player.load(config.TEST_VIDEO_URL);
      player.play();
    }
  }, [playerRef]);

  return (
    <Styled.VideoElement controls loop ref={playerRef} playsinline>
      <source type="video/mp4" />
      Your browser does not support the video tag.
    </Styled.VideoElement>
  );
};
