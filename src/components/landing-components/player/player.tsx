import * as Styled from "./player.styled";
import { config } from "../../../config/config";
import { useRef, useEffect } from "react";

declare global {
  interface Window {
    IVSPlayer: any;
    jwplayer: any;
  }
}

export const Player = () => {
  const playerRef = useRef();
  const currentMediaId = "2ge0Ws66";
  if (config.IS_AWS_IVS) {
  }

  // useEffect(() => {

  // }, [playerRef]);

  useEffect(() => {
    if (config.IS_AWS_IVS) {
      const IVSPlayer = window.IVSPlayer;
      if (IVSPlayer.isPlayerSupported) {
        const player = IVSPlayer.create();
        player.attachHTMLVideoElement(playerRef.current);
        player.load(config.TEST_VIDEO_URL);
        player.play();
      }
    } else {
      const jwplayer = window.jwplayer;
      if (jwplayer) {
        jwplayer("myplayer").setup({
          playlist: `https://cdn.jwplayer.com/v2/media/${currentMediaId}`,
        });
      }
    }
  }, [playerRef]);

  return (
    <>
      {config.IS_AWS_IVS ? (
        <Styled.VideoElement controls loop ref={playerRef} playsinline>
          <source type="video/mp4" />
          Your browser does not support the video tag.
        </Styled.VideoElement>
      ) : (
        <Styled.JWPlayerElement id="myplayer"></Styled.JWPlayerElement>
      )}
    </>
  );
};
