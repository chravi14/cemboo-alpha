import * as Styled from "./mobile-menu.styled";

export interface IMobileMenuProps {
  show: boolean;
  closeHandler: () => void;
}

export const MobileMenu: React.FC<IMobileMenuProps> = ({
  show,
  closeHandler,
}) => {
  const closeModal = () => {
    closeHandler();
  };
  return (
    <Styled.MobieMenuWrapper show={show}>
      <Styled.MobileMenuContent>
        <Styled.MobileMenuCloseIcon
          className="fas fa-times"
          onClick={closeModal}
        />
        <Styled.MobileMenuLinksWrapper>
          <Styled.MobileMenuLinkItem>
            <Styled.MobileMenuLink
              to="/about"
              activeclassname="active"
              exact="true"
              onClick={closeModal}
            >
              About
            </Styled.MobileMenuLink>
          </Styled.MobileMenuLinkItem>
          <Styled.MobileMenuLinkItem>
            <Styled.MobileMenuLink
              to="roadmap"
              activeclassname="active"
              exact="true"
              onClick={closeModal}
            >
              Roadmap
            </Styled.MobileMenuLink>
          </Styled.MobileMenuLinkItem>
        </Styled.MobileMenuLinksWrapper>
      </Styled.MobileMenuContent>
    </Styled.MobieMenuWrapper>
  );
};
