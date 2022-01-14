import styled from "styled-components";

export const VideoElement = styled.video<any>`
  max-width: 100%;
  width: 100%;
  height: 100%;
  // border: 1px solid rgba(0, 0, 0, 0.6);
  @media only screen and (min-width: 960px) {
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.6);
    border-radius: 5px;
    width: 93%;
  }

  @media only screen and (min-width: 1200px) {
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.6);
    border-radius: 5px;
    width: 100%;
  }
`;

export const JWPlayerElement = styled.div``;

export const PreviewWrapper = styled.div`
  max-width: 100%;
  width: 100%;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.6);
  @media only screen and (min-width: 960px) {
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.6);
    border-radius: 5px;
    width: 93%;
  }

  @media only screen and (min-width: 1200px) {
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.6);
    border-radius: 5px;
    width: 100%;
  }
  position: relative;
`;

export const PreviewImg = styled.img`
  width: 100%;
`;

export const PlayIconWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
`;

export const PlayIcon = styled.i`
  font-size: 50px;
  cursor: pointer;
  color: #b7f84d;
`;

export const ReactPlayerWrapper = styled.div<any>`
  display: ${({ playing }) => (playing ? "block" : "none")};
  @media only screen and (min-width: 1200px) {
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.6);
    border-radius: 5px;
    width: 100%;
  }
  transition: display 0.2s ease-in-out;
`;
