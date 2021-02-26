import styled from 'react-emotion'

export const Wrap = styled.div`
  width: ${props => props.width || '200px'};
  height: ${props => props.height || '38px'};
  position: relative;
  border: ${props => props.border || '1px solid #dfe0e1'};
  ${props =>
    (props.active && 'border-radius: 5px 5px 0 0') || 'border-radius: 5px'};
  cursor: pointer;
`
export const Select = styled.div`
  width: 100%;
  height: 100%;
  font-size: 14px;
  color: #52585c;
`
export const SelectItem = styled.div`
  padding: 7px 15px;
  user-select: none;
  position: relative;
  &:hover {
    background: ${props => props.bg || '#e2f2fe'};
  }
`
export const SelectItems = styled.div`
  position: absolute;
  display: ${props => (props.active && 'block') || 'none'};
  background: #fff;
  width: 100%;
  top: 100%;
  max-height: 300px;
  left: -1px;
  border: 1px solid #dfe0e1;
  border-radius: 0 0 5px 5px;
  overflow: scroll;
  z-index: 1000;
`
export const Heading = styled.div`
  position: absolute;
  padding: 0 15px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  line-height: 40px;
  user-select: none;
  border-radius: 5px;
  background: #fff;
  overflow: hidden;
`

export const Arrow = styled.div`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translate(0, -50%);
`
