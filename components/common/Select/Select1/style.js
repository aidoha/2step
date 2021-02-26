import styled from 'react-emotion'

export const Wrap = styled.div`
  height: ${props => props.height || '40px'};
  box-sizing: border-box;
  padding: 0 15px;
  position: relative;
  & select {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    position: absolute;
  }
  border: ${props => props.border || '1px solid rgba(40, 47, 54, 0.15)'};
  border-radius: ${props => props.borderRadius || '5px'};
  border-top: ${props => props.borderTop};
  width: ${props => props.width};
  margin: ${props => props.margin};
  box-sizing: ${props => props.box};
  color: ${props => props.color};
  font-style: normal;
`
export const Select = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${props => props.fontSize};
`
export const Text = styled.div`
  font-size: ${props => props.fontSize || '14px'};
  color: ${props => props.color || 'rgba(40, 47, 54, 0.5)'};
  overflow: hidden;
  white-space: pre;
`
export const Arrow = styled.div`
  width: 10px;
  height: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${props => props.arrowBorder};
  margin-left: 5px;
`
