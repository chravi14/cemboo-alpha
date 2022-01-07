import styled from "styled-components";

export const VideoElement = styled.video<any>`
  max-width: 100%;
  width: 100%;
  height: 100%;
  @media only screen and (min-width: 960px) {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.6);
    border-radius: 5px;
    width: 93%;
  }

  @media only screen and (min-width: 1200px) {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.6);
    border-radius: 5px;
    width: 100%;
  }
`;
