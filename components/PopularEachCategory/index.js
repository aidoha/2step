import {
  SliderControls,
  SliderWrap,
  Right,
  ItemWrap,
  Item,
  ProductName,
  ImageWrap,
  Wrap,
  Price
} from "./style";
import { Text } from "../../style/common";

import Slider from "react-slick";
import Link from "next/link";

import ArrowIcon from "../icons/arrowSlider";
import Rating from "../../components/common/Rating";
import toValidCost from "../../components/toValidCost";

class PopularEachCategory extends React.Component {
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
      slidesToShow: 4,
      slidesToScroll: 1,
      lazyLoad: true,
      autoplay: false,
      autoplaySpeed: 3000,
      centerMode: true,
      centerPadding: "0px"
    };
    const { name, popularProducts } = this.props;
    return popularProducts.length >= 4 && (
      <Wrap>
        <Text weight="600" size="16px" lh="50px">
          {name}
        </Text>
        <Right>
          <SliderControls prev onClick={() => this.previous()}>
            <ArrowIcon rotate="180" />
          </SliderControls>
          <SliderControls next onClick={() => this.next()}>
            <ArrowIcon rotate="0" />
          </SliderControls>
          <SliderWrap>
            <Slider {...settings} ref={c => (this.slider = c)}>
              {popularProducts.map(val => {
                  const { slug, oid, minimalPrice, mediaUrl } = val;
                  return (
                    <Link prefetch href={`/product/${slug}/${oid}`}>
                      <ItemWrap>
                        <Item>
                          <ImageWrap>
                            <img
                              src={JSON.parse(mediaUrl).images[0]}
                              alt={val.name}
                            />
                          </ImageWrap>
                          <ProductName>{val.name}</ProductName>
                          <Rating data={val} margin="0px" />
                          {minimalPrice !== 0 ? (
                            <Price>
                              {toValidCost(minimalPrice.toFixed(0))} ₸
                            </Price>
                          ) : (
                            <Price>Нет в наличии</Price>
                          )}
                        </Item>
                      </ItemWrap>
                    </Link>
                  );
                })}
            </Slider>
          </SliderWrap>
        </Right>
      </Wrap>
    );
  }
}

export default PopularEachCategory;
