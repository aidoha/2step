import styled, { keyframes } from "react-emotion";

const lds_ring = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  overflow: scroll;

  & .lds-ring {
    position: relative;
    width: 100%;
    height: 50%;
  }
  & .lds-ring div {
    box-sizing: border-box;
    width: 51px;
    height: 51px;
    position: absolute;
    top: 50%;
    bottom: 0;
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    border: 3px solid ${props => props.color};
    border-radius: 50%;
    animation: ${lds_ring} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${props => props.color} transparent transparent transparent;
  }
  & .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  & .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  & .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
`;
