import styled from "react-emotion";

const ArrowSlider = ({ rotate, color }) => {
  const Wrap = styled.div`
    & svg {
      transform: rotate(${rotate}deg);
    }
  `;
  return (
    <Wrap>
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d)">
          <rect x="20" y="15" width="40" height="40" rx="5" fill="#fff" />
          <rect
            x="20.5"
            y="15.5"
            width="39"
            height="39"
            rx="4.5"
            stroke="#F2F2F2"
          />
        </g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M43.4258 35.394C43.6434 35.1764 43.6434 34.8236 43.4258 34.606L38.3039 29.4841C38.0863 29.2665 37.7335 29.2665 37.5159 29.4841C37.2983 29.7017 37.2983 30.0545 37.5159 30.2721L41.8498 34.606C42.0674 34.8236 42.0674 35.1764 41.8498 35.394L37.5159 39.7279C37.2983 39.9455 37.2983 40.2983 37.5159 40.5159C37.7335 40.7335 38.0863 40.7335 38.3039 40.5159L43.4258 35.394Z"
          fill="#F18E67"
        />
        <defs>
          <filter
            id="filter0_d"
            x="0"
            y="0"
            width="80"
            height="80"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="5" />
            <feGaussianBlur stdDeviation="10" />
            <feColorMatrix values="0 0 0 0 0.156863 0 0 0 0 0.184314 0 0 0 0 0.211765 0 0 0 0.05 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </Wrap>
  );
};
export default ArrowSlider;
