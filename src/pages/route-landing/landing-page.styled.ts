import styled from "styled-components";
import { InnerContainer } from "../../components";

export const LandingPageWrapper = styled.div`
  @media only screen and (min-width: 960px) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    column-gap: 16px;
    padding: 8px 40px;
  }
`;

export const PlayerWrapper = styled.div`
  width: 100%;
  padding: 8px 0px;

  @media only screen and (min-width: 960px) {
    grid-column: 1/9;
  }
`;

export const EventInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);

  @media only screen and (min-width: 960px) {
    grid-column: 1/9;
    grid-row: 2/3;
    padding-bottom: 50px;
  }
`;

export const LogoWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const LogoImage = styled.img`
  width: 130px;
`;

export const SectionInnerContainer = styled(InnerContainer)`
  grid-column: 1/13;

  @media only screen and (min-width: 700px) and (max-width: 960px) {
    &.title {
      grid-column: 1/8;
    }

    &.description {
      grid-column: 1/9;
    }

    &.logo {
      grid-column: 9/13;
    }
  }

  @media only screen and (min-width: 960px) {
    &.title {
      grid-column: 1/11;
    }

    &.description {
      grid-column: 1/9;
    }

    &.logo {
      grid-column: 11/13;
      grid-row: 1/3;
    }
  }
`;
export const JudgesContainer = styled(InnerContainer)`
  @media only screen and (min-width: 960px) {
    grid-column: 9/13;
    grid-row: 1/5;
  }
`;
