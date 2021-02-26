import { Wrap, Right, BestOffer, SliderControls, SliderWrap } from "./style";
import banData from "../shopMainBanners";
import Slider from "react-slick";
import ArrowIcon from "../../icons/arrowWide";

class CategoryBestOffer extends React.Component {
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad: true,
      autoplay: false,
      autoplaySpeed: 8000,
    };
    return (
      <Wrap>
        <Right>
          <SliderControls prev onClick={() => this.previous()}>
            <ArrowIcon rotate="0" color="#fff" />
          </SliderControls>
          <SliderControls next onClick={() => this.next()}>
            <ArrowIcon rotate="180" color="#fff" />
          </SliderControls>
          <SliderWrap>
            <Slider {...settings} ref={c => (this.slider = c)}>
              {banData.map(val => {
                return <BestOffer bg={val.bgImg} href={val.link} />;
              })}
            </Slider>
          </SliderWrap>
        </Right>
      </Wrap>
    );
  }
}
export default CategoryBestOffer;
