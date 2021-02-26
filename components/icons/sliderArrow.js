import styled from 'react-emotion'

const SliderArror = ({ rotate }) => {
  const Wrap = styled.div`
    width: 13px;
    height: 21px;
    & > svg {
      transform: rotate(${rotate}deg);
    }
  `
  return (
    <Wrap>
      <svg
        width="13"
        height="21"
        viewBox="0 0 13 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11.2505 20L1.7564 11.2347C1.32752 10.8388 1.32752 10.1612 1.7564 9.76525L11.2505 1"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </Wrap>
  )
}

export default SliderArror
