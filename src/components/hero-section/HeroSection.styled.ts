import styled from "styled-components";

export const HeroSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: 0 auto;
  text-align: center;
  @media (max-width: 768px) {
    width: 75%;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const HeroSectionLogoImageWrapper = styled.div`
  margin-bottom: 10px;
`;

export const HeroSectionLogoImage = styled.img``;

export const HeroSectionContentWrapper = styled.div`
  width: 70%;
  margin: 10px 0;

  @media (max-width: 500px) {
    width: 95%;
  }
`;

export const HeroSectionContent = styled.p`
  color: #fff;
  line-height: 24px;
  font-size: 16px;
  font-weight: 400;
`;

export const NotifyButtonWrapper = styled.button`
  margin-top: 28px;
  padding: 10px 24px;
  box-shadow: none;
  color: rgba(183, 248, 77, 1);
  background: linear-gradient(
    103.07deg,
    rgba(183, 248, 77, 0.2) -38.19%,
    rgba(141, 198, 63, 0.2) 102.21%
  );
  border: 1px solid rgba(183, 248, 77, 0.2);
  font-weight: 600;
  font-size: 14px;
  border-radius: 1px;
  letter-spacing: 0.005em;
  line-height: 20px;
  cursor: pointer;
`;
