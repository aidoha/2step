import styled from 'react-emotion'

export const InputR = styled.input`
  -webkit-appearance: none;
  position: absolute !important;
  width: ${props => props.width || '100%'};
  left: -3px;
  bottom: 0;
  height: 0 !important;
  padding: 0 !important;
  color: transparent;
  border: none !important;
  outline: none;
  cursor: pointer;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: none !important;
    background: #4c8869;
  }
  &::-moz-range-progress {
    background-color: #4c8869;
  }
  &::-ms-fill-lower {
    background-color: #4c8869;
  }
`
