import styled from 'react-emotion'

export const Wrap = styled.div`
  min-height: 400px;
  display: flex;
`
export const Right = styled.div`
  position: relative;
  width: 100%;
  & .slick-slider {
    height: 100%;
  }

  & .slick-list {
    height: 100%;
  }

  & .slick-track {
    height: 100%;
  }

  & .slick-slide,
  .slick-active,
  .slick-current {
    height: 100%;
  }

  & .slick-slide > div {
    height: 100%;
  }

  & .slick-slide slick-active slick-current {
    margin-top: -40px;
  }
`

export const BestOffer = styled.a`
  width: 100%;
  height: 100%;
  position: relative;
  background: url(${props => props.bg});
  background-position: center;
  background-size: cover;
  cursor: pointer;
  display: block
`
export const SliderControls = styled.div`
  position: absolute;
  ${props => props.prev && 'left: 10px'};
  ${props => props.next && 'right: 10px'};
  top: 50%;
  transform: translate(0, -50%);
  cursor: pointer;
  z-index: 8;
`

export const SliderWrap = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  border-radius: 10px;
  & .slick-dots {
    bottom: 10px;
    font-size: 9px;
    & li button:before {
      font-size: 9px;
    }
  }
`