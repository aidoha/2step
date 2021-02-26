import {
  Wrap,
  Right,
  SliderControls,
  SliderWrap,
  ItemWrap,
  Item,
  ImageWrap,
  CategoryName,
  Heading,
  ProductName
} from "./style";
import Slider from "react-slick";
import Link from "next/link";

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
      data.blockproductsSet.edges.length !== 0 && (
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
                {data.blockproductsSet.edges.map(item => {
                  const {
                    slug,
                    oid,
                    mediaUrl,
                    name,
                    category
                  } = item.node.product;
                  return (
                    <Link href={`/product/${slug}/${oid}`}>
                      <ItemWrap>
                        <Item>
                          <ImageWrap>
                            <img
                              src={JSON.parse(mediaUrl).images[0]}
                              alt={name}
                              title={name}
                            />
                          </ImageWrap>
                          <ProductName>{name}</ProductName>
                          <CategoryName>{category.name}</CategoryName>
                        </Item>
                      </ItemWrap>
                    </Link>
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
