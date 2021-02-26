import styled, { keyframes } from 'react-emotion'

export const Wrap = styled.div``
export const Bg = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`
const scale = keyframes`
  0% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1.0);
  }
`
export const Modal = styled.div`
  position: fixed;
  background: #fff;
  z-index: 1001;
  top: 80px;
  left: calc(50% - 35%);
  box-sizing: border-box;
  padding: 30px;
  border-radius: 10px;
  width: 70%;
  animation: ${scale} 0.5s ease;
`
export const Btn = styled.div`
  position: absolute;
  width: 25px;
  height: 25px;
  right: 30px;
  top: 30px;
  cursor: pointer;
  & > svg {
    width: 100%;
    height: 100%;
  }
`
export const Title = styled.div`
  font-family: Roboto Slab;
  font-style: normal;
  font-weight: bold;
  line-height: 25px;
  font-size: 18px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #282f36;
  margin-bottom: 40px;
`
export const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`
export const Block = styled.div`
  margin-bottom: 30px;
`
export const Text = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.4);
  margin-bottom: 5px;
`
export const Inputs = styled.div`
  position: relative;
  & > input {
    width: 260px;
    height: 40px;
    box-sizing: border-box;
    border-radius: 5px;
    border: 1px solid rgba(40, 47, 54, 0.15);
    padding: 0 15px;
    color: rgba(40, 47, 54, 0.3);
    font-size: 14px;
    outline: none;
    color: #52585c;
  }
`
export const CheckboxWrapper = styled.div`
  margin-bottom: 30px;
`
export const ButtonWrapper = styled.div`
  display: flex;
`
