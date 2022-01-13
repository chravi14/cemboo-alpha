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

  useEffect(() => {
    if (config.IS_AWS_IVS) {
      const IVSPlayer = window.IVSPlayer;
      if (IVSPlayer.isPlayerSupported) {
        const player = IVSPlayer.create();
        player.attachHTMLVideoElement(playerRef.current);
        player.load(config.IVS_VIDEO_URL);
        player.play();
      }
    } else {
      const jwplayer = window.jwplayer;
      if (jwplayer) {
        jwplayer("myplayer").setup({
          playlist: [
            {
              file: config.IVS_VIDEO_URL,
              type: "ivs",
            },
          ],
        });
      }
    }
  }, [playerRef]);

  return (
    <>
      {config.IS_AWS_IVS ? (
        <Styled.VideoElement controls muted ref={playerRef} playsinline>
          <source type="video/mp4" src={config.S3_VIDEO_URL} />
          Your browser does not support the video tag.
        </Styled.VideoElement>
      ) : (
        <Styled.JWPlayerElement id="myplayer"></Styled.JWPlayerElement>
      )}
    </>
  );
};
