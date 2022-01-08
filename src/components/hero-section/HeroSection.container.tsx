import React, { useState } from "react";
import { Modal } from "../ui/modal/Modal";
import Logo from "./../../assets/images/logos/logo.png";

import * as Styled from "./HeroSection.styled";

export const HeroSectionContainer = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Styled.HeroSectionWrapper>
        <Styled.HeroSectionLogoImageWrapper>
          <Styled.HeroSectionLogoImage src={Logo} width={240} />
        </Styled.HeroSectionLogoImageWrapper>
        <Styled.HeroSectionContentWrapper>
          <Styled.HeroSectionContent>
            Cemboo’s mission is to empower content owners with the flexibility
            to control, monetize and distribute their own digital media content
            through values of quality, community and innovation.
          </Styled.HeroSectionContent>
        </Styled.HeroSectionContentWrapper>
        <Styled.NotifyButtonWrapper onClick={() => setShowModal(true)}>
          Notify Me
        </Styled.NotifyButtonWrapper>
      </Styled.HeroSectionWrapper>
      <Modal closeHandler={() => setShowModal(false)} show={showModal} />
    </>
  );
};
