import styled from "react-emotion";

export const Text = styled.div`
  font-size: ${props => props.size || "14px"};
  color: ${props => props.color || "#282F36"};
  font-weight: ${props => props.weight || "normal"};
  margin: ${props => props.margin || "0"};
  margin-top: ${props => props.marginTop || "0"};
  margin-bottom: ${props => props.marginBottom || "0"};
  margin-left: ${props => props.marginLeft || "0"};
  margin-right: ${props => props.marginRight || "0"};
  padding: ${props => props.padding || "0"};
  padding-top: ${props => props.paddingTop || "0"};
  padding-bottom: ${props => props.paddingBottom || "0"};
  padding-left: ${props => props.paddingLeft || "0"};
  padding-right: ${props => props.paddingRight || "0"};
  white-space: ${props => props.whiteSpace};
  line-height: ${props => props.lh};
  text-align: ${props => props.textAl};
  text-decoration: ${props => props.textDec};
  overflow: ${props => props.overflow};
  text-overflow: ${props => props.textOverflow};
  cursor: ${props => props.cursor};
  border-bottom: ${props => props.bb};
  user-select: ${props => props.userSelect};
  position: ${props => props.position};
  top: ${props => props.top};
  bottom: ${props => props.bottom};
  left: ${props => props.left};
  right: ${props => props.right};
  width: ${props => props.width};
`;
export const Block = styled.div`
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
  margin-left: ${props => props.marginLeft};
  margin-right: ${props => props.marginRight};
  padding-top: ${props => props.paddingTop || "0"};
  padding-bottom: ${props => props.paddingBottom || "0"};
  padding-left: ${props => props.paddingLeft || "0"};
  padding-right: ${props => props.paddingRight || "0"};
  width: ${props => props.width};
  height: ${props => props.height};
  box-sizing: ${props => props.boxSizing};
  border-top: ${props => props.borderTop};
  max-width: ${props => props.maxWidth};
  min-width: ${props => props.minWidth};
  :first-child {
    margin-top: ${props => props.ftmarginTop};
  }
`;

export const FlexBlock = styled.div`
  display: flex;
  background: ${props => props.bg};
  justify-content: ${props => props.jc};
  align-items: ${props => props.ai};
  flex-direction: ${props => props.fd};
  flex-wrap: ${props => props.fw};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
  margin-left: ${props => props.marginLeft};
  margin-right: ${props => props.marginRight};
  padding-top: ${props => props.paddingTop};
  padding-bottom: ${props => props.paddingBottom};
  padding-left: ${props => props.paddingLeft};
  padding-right: ${props => props.paddingRight};
  white-space: ${props => props.ws};
  text-overflow: ${props => props.textOverflow};
  overflow: ${props => props.overflow};
  width: ${props => props.width};
  height: ${props => props.height};
  position: ${props => props.position};
`;
export const InputWrap = styled.div`
  width: ${props => props.width || "420px"};
  margin-top: ${props => props.margin || "30px"};
  & > input[name="addressHome"] {
    width: 95%;
  }
  & > input[name="addressFlat"] {
    width: 95%;
    margin-left: 10px;
  }
  & > input {
    width: 100%;
    height: 50px;
    border-radius: 5px;
    box-sizing: border-box;
    padding: ${props => props.padding || "0 10px"};
    border: ${props =>
      (props.error && `1px solid #FF4F52`) || `1px solid #DFE0E1`};
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    line-height: 20px;
    font-size: 14px;
    color: #282f36;
    outline: none;
    background: #ffffff;
    ::placeholder {
      color: #bec0c3;
    }
  }
  & > textarea {
    width: 600px;
    height: 120px;
    border-radius: 5px;
    box-sizing: border-box;
    padding: ${props => props.padding || "0 10px"};
    border: ${props =>
      (props.error && `1px solid #FF4F52`) || `1px solid #DFE0E1`};
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    line-height: 20px;
    font-size: 14px;
    color: #282f36;
    outline: none;
    background: #ffffff;
    resize: none;
    ::placeholder {
      color: #bec0c3;
    }
  }
`;
