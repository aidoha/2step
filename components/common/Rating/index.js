import Rating from 'react-rating'
import Star from '../../icons/star'
import styled from 'react-emotion'

const RateText = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #93979B;
  margin-left: 5px;
`
const RateWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${props => props.margin || '10px'};
`

const Rate = ({ data, margin }) => {
  return(
    <RateWrap margin={margin}>
      <Rating
        readonly
        initialRating={data.rating[0]}
        emptySymbol={
          <Star color={"#BEC0C3"} />
        }
        fullSymbol={
          <Star color={"#FFA34D"} />
        }
      />
      {data.rating.length !== 0 ? (
        <RateText>{data.rating[1]} отзывов</RateText>
      ) : (
        <RateText>Нет отзывов</RateText>
      )}
    </RateWrap> 
  )
}

export default Rate