import styled from 'react-emotion'

const TriangleArrow = props => {
  const Wrap = styled.div`
    & > svg {
      transform: rotate(${props.rotate}deg);
    }
  `
  return (
    <Wrap>
      <svg
        width="6"
        height="8"
        viewBox="0 0 6 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 0L0 8L6 4L0 0Z"
          fill="#282F36"
        />
      </svg>
    </Wrap>
  )
}

export default TriangleArrow
