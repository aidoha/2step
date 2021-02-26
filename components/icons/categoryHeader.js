import styled from 'react-emotion'

const CategoryHeader = () => {
  const Wrap = styled.div`
    margin-right: 8px;
  `
  return (
    <Wrap>
      <svg
        width="15"
        height="10"
        viewBox="0 0 15 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="15" height="1.25" rx="0.625" fill="white" />
        <rect y="4.375" width="11.25" height="1.25" rx="0.625" fill="white" />
        <rect y="8.75" width="15" height="1.25" rx="0.625" fill="white" />
      </svg>
    </Wrap>
  )
}

export default CategoryHeader
