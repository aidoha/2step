import styled from 'react-emotion'

const ArrowWide = ({ rotate, color }) => {
  const Wrap = styled.div`
    & svg {
      transform: rotate(${rotate}deg);
    }
  `
  return (
    <Wrap>
      <svg
        width="16"
        height="30"
        viewBox="0 0 16 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          opacity="0.5"
          d="M15.0001 1L1.33203 14.2829C0.927929 14.6756 0.92793 15.3244 1.33203 15.7171L15.0001 29"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </Wrap>
  )
}
export default ArrowWide
