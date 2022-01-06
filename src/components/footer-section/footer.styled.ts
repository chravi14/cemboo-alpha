import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(
      0deg,
      rgba(12, 4, 30, 0.85),
      rgba(12, 4, 30, 0.85)
    ),
    #b7f84d;
  height: 40px;
  padding: 0 16px;
`;

export const FooterLeftWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const FooterLink = styled.a`
  margin-right: 10px;
  cursor: pointer;
`;

export const FooterIcon = styled.img`
  width: 20px;
`;

export const FooterRightWrapper = styled.div``;

export const CopyRightContent = styled.p`
  color: rgba(183, 248, 77, 0.6);
  font-size: 12px;
  font-weight: 400;
  line-height: 24px;
`;
