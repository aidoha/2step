const arrowCurrency = props => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      style={{ marginLeft: '5px' }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform={`rotate(${props.up && '-180'})`}>
      <path
        d="M6.16664 0.333326L7.83331 0.333326L7.83331 10.3333L12.4166 5.74999L13.6 6.93333L6.99998 13.5333L0.399977 6.93333L1.58331 5.74999L6.16664 10.3333L6.16664 0.333326Z"
        fill={(props.red && '#FF4F52') || (props.green && '#3DC47E')}
      />
    </svg>
  )
}

export default arrowCurrency
