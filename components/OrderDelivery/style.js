import styled from "react-emotion";

export const DeliverySwitcher = styled.div`
  display: flex;
  justify-content: space-between;
  color: #52585c;
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 10px;
  max-width: 600px;
  min-width: 600px;
`;
export const Switcher = styled.div`
  width: 48%;
  height: 120px;
  text-align: left;
  cursor: pointer;
  background: #ffffff;
  border: 1px solid #dfe0e1;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 15px 20px;
  ${props => props.active && "border: 1px solid #77BEFF"};
`;
export const SelectBox = styled.div`
  background: #ffffff;
  border: 1px solid #dfe0e1;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 15px 20px;
  width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;
