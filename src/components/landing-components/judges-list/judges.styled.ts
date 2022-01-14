import styled from "styled-components";

export const JudgesWrapper = styled.div`
  margin-top: 30px;

  @media only screen and (min-width: 960px) {
    margin-top: 10px;
  }
`;

export const JudgesListWrapper = styled.div`
  padding-bottom: 70px;

  @media only screen and (min-width: 700px) and (max-width: 960px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
  }
`;
