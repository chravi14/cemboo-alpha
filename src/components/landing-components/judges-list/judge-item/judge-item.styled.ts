import styled from "styled-components";

export const JudgeItemWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
  padding: 10px 16px;
  background: rgba(18, 20, 25, 1);
  margin: 10px 0;
  align-items: center;
  border-radius: 10px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
`;

export const JudgeItemImage = styled.img`
  width: 100%;
  border-radius: 5px;
  grid-column: 1/4;
`;

export const JudgeItemBioWrapper = styled.div`
  grid-column: 4/12;
  display: flex;
  flex-direction: column;
`;
