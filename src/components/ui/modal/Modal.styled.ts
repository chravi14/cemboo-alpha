import styled, { keyframes } from "styled-components";

const animateTop = keyframes`
  from {
    top:-300px;
    opacity:0;
  }
  to {
    top:0;
    opacity:1;
  }
`;

export const ModalWrapper = styled.div<any>`
  display: ${(props) =>
    props.show ? "block" : "none"}; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.8); /* Black w/ opacity */
  background: rgba(11, 11, 11, 0.9);

  @media (max-width: 500px) {
    padding-top: 0;
  }
`;

export const ModalContentWrapper = styled.div`
  position: relative;
  background-color: #121419;
  margin: auto;
  width: 33%;
  //   top: 50%;
  //   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-animation-name: ${animateTop};
  -webkit-animation-duration: 0.4s;
  animation-name: ${animateTop};
  animation-duration: 0.4s;
  padding: 20px 40px;
  @media (max-width: 768px) {
    width: 50%;
  }
  @media (max-width: 500px) {
    width: 100%;
    height: 100%;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalH1 = styled.h1`
  color: #f1f1f1;
  font-weight: 700;
  font-size: 32px;
  flex: 1;

  @media (max-width: 500px) {
    font-size: 26px;
  }
`;

export const ModalCloseIcon = styled.i`
  color: #fff;
  font-size: 32px;
  cursor: pointer;
`;

export const ModalBody = styled.div`
  disply: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;

export const SignupFormWrapper = styled.div`
  padding-top: 40px;
`;

export const FormRow = styled.div`
  margin: 10px 0;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const FormCol = styled.div`
  width: 48%;

  @media (max-width: 500px) {
    width: 100%;
    margin: 10px 0;
  }
`;

export const FormLabel = styled.p`
  font-size: 16px;
  color: #ffffff;
  font-weight: 400;
  line-height: 24px;
  margin-top: 28px;
`;

export const CheckBoxWrapper = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
`;

export const CheckBoxItemWrapper = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px 0;
  border-radius: 5px;
`;

export const CheckBox = styled.input`
  -webkit-appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 1px;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;

  &:after {
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    content: "\f00c";
    color: #111;
    display: none;
  }

  &:hover {
    background: #a5a5a5;
  }

  &:checked {
    background: rgba(183, 248, 77, 1);
    &:after {
      display: block;
    }
  }
`;

export const CheckBoxLabel = styled.label`
  color: #fff;
  margin-left: 16px;
  font-size: 14px;
  cursor: pointer;
`;

export const ModalFooter = styled.div``;

export const SubmitButtonWrapper = styled.button`
  background: linear-gradient(
    103.07deg,
    rgba(183, 248, 77, 0.2) -38.19%,
    rgba(141, 198, 63, 0.2) 102.21%
  );
  cursor: pointer;
  border-radius: 1px;
  padding: 10px 24px;
  width: 100%;
  box-shadow: none;
  color: rgba(183, 248, 77, 1);
  border: 1px solid rgba(255, 255, 255, 0.4);
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;

  &:disabled {
    background: rgba(255, 255, 255, 0.2);
    color: rgba(255, 255, 255, 0.2);
    border: 1px solid transparent;
  }
`;
