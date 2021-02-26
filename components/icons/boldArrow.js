import styled from 'react-emotion'

const BoldArrow = props => {
  const Wrap = styled.div`
    & > svg {
      transform: rotate(${props.rotate}deg);
    }
  `
  return (
    <Wrap>
      <svg
        width="8"
        height="5"
        viewBox="0 0 8 5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 4.00098L4 1.00098L7 4.00098"
          stroke="#282F36"
          strokeOpacity="0.5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Wrap>
  )
}

export default BoldArrow
