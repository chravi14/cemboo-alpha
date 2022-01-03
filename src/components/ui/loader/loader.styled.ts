import styled, { keyframes } from "styled-components";

const animateLoader = keyframes`
    0% {
        -webkit-transform: rotate(0deg); 
    }
    100% { 
        -webkit-transform: rotate(360deg); 
    }
`;

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
`;

export const Loader = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 5px solid rgba(255, 255, 255, 1);
  border-top: 5px solid #b7f84d;
  animation: ${animateLoader} 2s linear infinite;
  -webkit-animation: ${animateLoader} 2s linear infinite;
`;
