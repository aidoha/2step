import {
  Wrap,
  Left,
  CatalogWrap,
  CatalogItems,
  CatalogItem,
  Right,
  HiddenWrap,
  HiddenItemHeader,
  HiddenItems,
  HiddenItemsWrap,
  HiddenItem,
  HiddenHeader,
  IconWrap
} from "./style";
import OfficeIcon from "../icons/categories/forOffice";
import LeatureTimeIcon from "../icons/categories/leatureTime";
import EqupmentIcon from "../icons/categories/equipment";
import Gifts from "../icons/categories/gifts";
import Beauty from "../icons/categories/beauty";
import HouseIcon from "../icons/categories/house";
import CompTechIcon from "../icons/categories/compTech";
import SportsIcon from "../icons/categories/sports";
import AutoIcon from "../icons/categories/auto";
import ElectronicsIcon from "../icons/categories/electronics";
import ApillIcon from "../icons/categories/appil";
import Baby from "../icons/categories/baby";
import Fasion from "../icons/categories/fasion";
import Build from "../icons/categories/build";
import Loader from "../Loader";

import { graphql, Query } from "react-apollo";
import gql from "graphql-tag";

import Link from "next/link";

const ALL_CATEGORIES = gql`
  {
    allCategories {
      id
      name
      slug
    }
  }
`;

const GET_CATEGORY = gql`
  query getCategory($id: Int!) {
    getRootCategory(id: $id) {
      id
      name
      subcategories {
        id
        name
        slug
        subcategories {
          id
          name
          slug
          mediaUrl
        }
      }
    }
  }
`;

class CategoryBestOffer extends React.Component {
  state = {
    activeCat: 13
  };

  hiddenBlockHandler = id => {
    this.setState({ activeCat: id });
  };

  render() {
    const { data } = this.props;
    const { loading, allCategories } = data;
    if (loading) return <div />;
    return (
      <Wrap onMouseLeave={() => this.props.onCategoryListClick()}>
        <Left>
          <CatalogWrap>
            <CatalogItems>
              {allCategories.map(val => (
                <CatalogItem
                  key={val.id}
                  active={this.state.activeCat === val.id}
                  onMouseEnter={() => this.hiddenBlockHandler(val.id)}
                  onMouseLeave={() => this.hiddenBlockHandler(val.id)}
                >
                  {val.id === "3" && (
                    <IconWrap>
                      <OfficeIcon />
                    </IconWrap>
                  )}
                  {val.id === "6" && (
                    <IconWrap>
                      <LeatureTimeIcon />
                    </IconWrap>
                  )}
                  {val.id === "9" && (
                    <IconWrap>
                      <EqupmentIcon />
                    </IconWrap>
                  )}
                  {val.id === "10" && (
                    <IconWrap>
                      <Gifts />
                    </IconWrap>
                  )}
                  {val.id === "8" && (
                    <IconWrap>
                      <Beauty />
                    </IconWrap>
                  )}
                  {val.id === "42" && (
                    <IconWrap>
                      <Build />
                    </IconWrap>
                  )}
                  {val.id === "5" && (
                    <IconWrap>
                      <HouseIcon />
                    </IconWrap>
                  )}
                  {val.id === "7" && (
                    <IconWrap>
                      <CompTechIcon />
                    </IconWrap>
                  )}
                  {val.id === "12" && (
                    <IconWrap>
                      <SportsIcon />
                    </IconWrap>
                  )}
                  {val.id === "1" && (
                    <IconWrap>
                      <AutoIcon />
                    </IconWrap>
                  )}
                  {val.id === "13" && (
                    <IconWrap>
                      <ElectronicsIcon />
                    </IconWrap>
                  )}
                  {val.id === "2" && (
                    <IconWrap>
                      <ApillIcon />
                    </IconWrap>
                  )}
                  {val.id === "4" && (
                    <IconWrap>
                      <Baby />
                    </IconWrap>
                  )}
                  {val.id === "1717" && (
                    <IconWrap>
                      <Fasion />
                    </IconWrap>
                  )}
                  <span style={{ marginLeft: "10px" }}>{val.name}</span>
                </CatalogItem>
              ))}
            </CatalogItems>
          </CatalogWrap>
        </Left>
        <Right>
          <Query query={GET_CATEGORY} variables={{ id: this.state.activeCat }}>
            {({ loading, data, error }) => {
              if (loading) return <div />;
              if (error) return <div>{`Error: ${error}`}</div>;

              const categoryId = allCategories.filter(
                val => val.id == this.state.activeCat.toString()
              )[0].id;
              const slug = allCategories.filter(
                val => val.id == this.state.activeCat.toString()
              )[0].slug;

              return (
                <HiddenWrap>
                  <Link href={`/categories/${slug}/${categoryId}`} prefetch>
                    <HiddenHeader>
                      {
                        allCategories.filter(
                          val => val.id == this.state.activeCat.toString()
                        )[0].name
                      }
                    </HiddenHeader>
                  </Link>
                  <HiddenItems>
                    {data.getRootCategory.subcategories &&
                      data.getRootCategory.subcategories.map(val => {
                        return (
                          <HiddenItemsWrap>
                            <Link
                              prefetch
                              href={`/subcategories/${val.slug}/${val.id}`}
                            >
                              <HiddenItemHeader>{val.name}</HiddenItemHeader>
                            </Link>
                            {val.subcategories.map(v => {
                              return (
                                <Link
                                  prefetch
                                  href={`/catalog/${v.slug}/${v.id}`}
                                >
                                  <HiddenItem>{v.name}</HiddenItem>
                                </Link>
                              );
                            })}
                          </HiddenItemsWrap>
                        );
                      })}
                  </HiddenItems>
                </HiddenWrap>
              );
            }}
          </Query>
        </Right>
      </Wrap>
    );
  }
}
export default graphql(ALL_CATEGORIES)(CategoryBestOffer);
