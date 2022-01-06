import React from "react";
import LinkedInIcon from "./../../assets/linkedin.png";
import TwitterIcon from "./../../assets/twitter.png";
import InstagramIcon from "./../../assets/instagram.png";

import * as Styled from "./footer.styled";

export const Footer = () => {
  return (
    <Styled.FooterWrapper>
      <Styled.FooterLeftWrapper>
        <Styled.FooterLink
          href="https://www.linkedin.com/company/haydenfilms-institute"
          target="_blank"
        >
          <Styled.FooterIcon src={LinkedInIcon} />
        </Styled.FooterLink>
        <Styled.FooterLink
          href="https://twitter.com/Haydenfilms"
          target="_blank"
        >
          <Styled.FooterIcon src={TwitterIcon} />
        </Styled.FooterLink>
        <Styled.FooterLink
          href="https://www.instagram.com/haydenfilms"
          target="_blank"
        >
          <Styled.FooterIcon src={InstagramIcon} />
        </Styled.FooterLink>
      </Styled.FooterLeftWrapper>
      <Styled.FooterRightWrapper>
        <Styled.CopyRightContent>
          Copyright &copy; 2022. All rights reserved.
        </Styled.CopyRightContent>
      </Styled.FooterRightWrapper>
    </Styled.FooterWrapper>
  );
};
