import styled from 'react-emotion'

const CloseWhite = ({ color }) => {
  const Wrap = styled.div`
    width: 22px;
    height: 22px;
    margin-right: 1px;
    padding-right: 2px;
    box-sizing: border-box;
  `
  return (
    <Wrap>
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.9097 5.30321C15.6168 5.01032 15.1419 5.01032 14.849 5.30321L10.6063 9.5459L6.36376 5.30335C6.07086 5.01045 5.59599 5.01045 5.3031 5.30335C5.0102 5.59624 5.0102 6.07112 5.3031 6.36401L9.54565 10.6066L5.30306 14.8492C5.01017 15.142 5.01017 15.6169 5.30306 15.9098C5.59595 16.2027 6.07083 16.2027 6.36372 15.9098L10.6063 11.6672L14.849 15.91C15.1419 16.2028 15.6168 16.2028 15.9097 15.91C16.2026 15.6171 16.2026 15.1422 15.9097 14.8493L11.667 10.6066L15.9097 6.36387C16.2026 6.07098 16.2026 5.59611 15.9097 5.30321Z"
          fill={color || '#fff'}
        />
      </svg>
    </Wrap>
  )
}

export default CloseWhite
