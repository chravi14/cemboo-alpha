import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";

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

export const MobieMenuWrapper = styled.div<any>`
  position: relative;
  height: 100vh;
  display: ${(props) =>
    props.show ? "block" : "none"}; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 0px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.8); /* Black w/ opacity */
  background: rgba(11, 11, 11, 0.9);
`;

export const MobileMenuContent = styled.div`
  position: relative;
  background-color: #121419;
  margin: auto;
  width: 33%;
  -webkit-animation-name: ${animateTop};
  -webkit-animation-duration: 0.4s;
  animation-name: ${animateTop};
  animation-duration: 0.4s;
  padding: 20px 40px;
  width: 100%;
  height: 100%;
`;

export const MobileMenuCloseIcon = styled.i`
  color: #fff;
  font-size: 32px;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const MobileMenuLinksWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;

export const MobileMenuLinkItem = styled.li`
  margin: 20px 0;
  list-style: none;
  display: block;
`;

export const MobileMenuLink = styled(NavLink)<any>`
  color: #ffffff;
  font-weight: 600;
  font-size: 14px;
  border: 2px solid transparent;
  padding: 10px;

  &.active {
    border: 2px solid rgba(183, 248, 77, 1);
  }
`;
