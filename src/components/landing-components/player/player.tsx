import React from "react";
import ReactPlayer from "react-player";
import * as Styled from "./player.styled";
import { config } from "../../../config/config";
// import { useRef, useEffect } from "react";

declare global {
  interface Window {
    IVSPlayer: any;
    jwplayer: any;
  }
}

export const Player = () => {
  const [playing, setPlaying] = React.useState(false);
  // const playerRef = React.createRef();

  // useEffect(() => {
  //   if (config.IS_AWS_IVS) {
  //     const IVSPlayer = window.IVSPlayer;
  //     if (IVSPlayer.isPlayerSupported) {
  //       const player = IVSPlayer.create();
  //       player.attachHTMLVideoElement(playerRef.current);
  //       player.load(config.IVS_VIDEO_URL);
  //       player.play();
  //     }
  //   } else {
  //     const jwplayer = window.jwplayer;
  //     if (jwplayer) {
  //       jwplayer("myplayer").setup({
  //         playlist: [
  //           {
  //             file: config.IVS_VIDEO_URL,
  //             type: "ivs",
  //           },
  //         ],
  //       });
  //     }
  //   }
  // }, [playerRef]);

  const previewImageSection = () => {
    return (
      <Styled.PreviewWrapper onClick={() => setPlaying(true)}>
        <Styled.PreviewImg src="https://cemboo-thumbnail-images.s3.amazonaws.com/cemboo-alpha/poster.jpg" />
        <Styled.PlayIconWrapper>
          <Styled.PlayIcon className="fas fa-play" />
        </Styled.PlayIconWrapper>
      </Styled.PreviewWrapper>
    );
  };

  return (
    <>
      {!playing && previewImageSection()}
      <Styled.ReactPlayerWrapper playing={playing}>
        <ReactPlayer
          width="100%"
          height="100%"
          url={config.IVS_VIDEO_URL}
          muted={true}
          playing={playing}
          controls
        />
      </Styled.ReactPlayerWrapper>
    </>
  );
  // return (
  //   <>
  //     {config.IS_AWS_IVS ? (
  //       <Styled.VideoElement
  //         controls
  //         muted
  //         autoPlay={false}
  //         ref={playerRef}
  //         playsinline
  //         poster="https://cemboo-thumbnail-images.s3.amazonaws.com/cemboo-alpha/poster.jpg"
  //       >
  //         <source type="video/mp4" src={config.S3_VIDEO_URL} />
  //         Your browser does not support the video tag.
  //       </Styled.VideoElement>
  //     ) : (
  //       <Styled.JWPlayerElement id="myplayer"></Styled.JWPlayerElement>
  //     )}
  //   </>
  // );
};
