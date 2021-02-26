import styled from 'react-emotion'

export const Wrap = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`
export const Left = styled.div`
	width: 50%;
`
export const Title = styled.div`
	font-family: Open Sans;
	font-style: normal;
	font-weight: bold;
	font-size: 32px;
	line-height: 46px;
	color: #282F36;
`
export const Subtitle = styled.div`
	font-family: Open Sans;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 19px;
	color: #282F36;
	margin-top: 10px;
`
export const Button = styled.div`
	background: #F18E67;
	box-shadow: 4px 6px 10px rgba(241, 142, 103, 0.2);
	border-radius: 5px;
	color: #FFFFFF;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 181px;
	height: 50px;
	cursor: pointer;
`
export const ImageWrap = styled.div`	
	display: flex;
	justify-content: flex-end;
	& > img {
		width: 470px;
		height: 400px;
	}
`