import {
  Wrap,
  Right,
  SliderControls,
  SliderWrap,
  ItemWrap,
  Item,
  ImageWrap,
  CategoryName,
  GoLink,
  FlexWrap,
  Line,
  Heading
} from "./style";
import Slider from "react-slick";

import ArrowIcon from "../icons/arrowSlider";

class PopularCategories extends React.Component {
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      lazyLoad: true,
      autoplay: false,
      autoplaySpeed: 3000,
      centerMode: true,
      centerPadding: "0px"
    };
    const { data, title } = this.props;
    return (
      data.length !== 0 && (
        <Wrap>
          <Heading>{title}</Heading>
          <Right>
            <SliderControls prev onClick={() => this.previous()}>
              <ArrowIcon rotate="180" />
            </SliderControls>
            <SliderControls next onClick={() => this.next()}>
              <ArrowIcon rotate="0" />
            </SliderControls>
            <SliderWrap>
              <Slider {...settings} ref={c => (this.slider = c)}>
                {data.map(item => {
                  return (
                    <ItemWrap>
                      <Item href={`/catalog/${item.slug}/${item.id}`}>
                        <ImageWrap>
                          <img src={item.mediaUrl} alt="" />
                        </ImageWrap>
                        <CategoryName>{item.name}</CategoryName>
                        <FlexWrap>
                          <Line />
                          <GoLink>Перейти</GoLink>
                        </FlexWrap>
                      </Item>
                    </ItemWrap>
                  );
                })}
              </Slider>
            </SliderWrap>
          </Right>
        </Wrap>
      )
    );
  }
}

export default PopularCategories;
