import MainLayout from "../../components/MainLayout";
import ProductCardOne from "../../components/ProductCardOne";
import FilterCollapse from "../../components/FilterCollapse";
import Router from "next/router";
import Head from "../../components/head";
import Pagination from "../../components/common/Pagination";
import {
  Content,
  LeftContainer,
  RightContainer,
  SortBlock,
  SortLabel,
  ProductListWrap,
  CatalogName,
  NoProductFind,
  SortByText
} from "../../style/search";
import { GET_PRODUCT_LIST } from "../../queries/search";
import { Query } from "react-apollo";

class Search extends React.Component {
  static async getInitialProps({ apolloClient, query }) {
    return {
      apolloClient,
      query
    };
  }

  state = {
    filterItemStatus: -1,
    selectActive: 0,
    numShow: 12,
    filterItems: [],
    search: "",
    searchStatus: false
  };

  componentWillMount = () => {
    const { id, slug, sort, ...queries } = this.props.query;
    let filterItemsInit = queries;
    this.setState({
      filterItems: filterItemsInit
    });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  selectHandler = i => {
    const pathname = Router.router.asPath.split("?")[0];
    const { id, slug, ...other } = this.props.query;
    console.log(this.props.query);
    this.setState({ selectActive: i });
    let sortStatus =
      i === 1 ? "BY_ASC" : i === 2 ? "BY_DESC" : i === 3 ? "BY_POP" : "";
    Router.push({
      pathname: pathname,
      query: { ...other, sort: sortStatus },
      shallow: true
    });
  };

  filterItemHandler = id => {
    if (this.state.filterItemStatus === id) {
      this.setState({ filterItemStatus: -1 });
    } else {
      this.setState({ filterItemStatus: id });
    }
  };

  productsMore = () => {
    this.setState(prevState => ({
      numShow: prevState.numShow + 12
    }));
    this.props.data.fetchMore({
      variables: {
        first: this.state.numShow,
        last: this.state.numShow + 12
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) return previousResult;
        return {
          ...previousResult,
          productFilter: {
            products: {
              ...previousResult.productFilter.products,
              ...fetchMoreResult.productFilter.products
            }
          }
        };
      }
    });
  };

  onFillFilter = (e, name, value) => {
    const { checked } = e.target;
    const pathname = Router.router.asPath.split("?")[0];
    let newFilterItems = this.state.filterItems;
    const isArray = Array.isArray(newFilterItems[name]);
    if (checked) {
      if (newFilterItems[name]) {
        if (isArray) {
          newFilterItems[name] = newFilterItems[name].push(value);
        } else {
          let arrayValue = [newFilterItems[name]];
          arrayValue.push(value);
          newFilterItems[name] = arrayValue;
        }
      } else {
        newFilterItems[name] = value;
      }
    } else {
      if (isArray) {
        if (newFilterItems[name].length !== 1) {
          newFilterItems[name] = newFilterItems[name].filter(x => x !== value);
        } else {
          newFilterItems[name] = newFilterItems[name].filter(
            x => x !== value
          )[0];
        }
      } else {
        delete newFilterItems[name];
      }
    }
    Router.push({
      pathname: pathname,
      query: newFilterItems,
      shallow: true
    });


    this.setState({ filterItems: newFilterItems });

  };

  onPageChange = pageNumber => {
    const pathname = Router.router.asPath.split("?")[0];
    const { id, slug, page, ...other } = this.props.query;
    Router.push({
      pathname: pathname,
      query: {
        ...other,
        page: pageNumber
      },
      shallow: true
    });
  };

  onNextPage = totalPages => {
    const pathname = Router.router.asPath.split("?")[0];
    const { id, slug, page, ...other } = this.props.query;
    if (page && parseInt(page, 10) !== totalPages) {
      Router.push({
        pathname: pathname,
        query: {
          ...other,
          page: parseInt(page, 10) + 1
        }
      });
    } else if (!page) {
      Router.push({
        pathname: pathname,
        query: {
          ...other,
          page: 2
        },
        shallow: true
      });
    }
  };

  onPrevPage = () => {
    const pathname = Router.router.asPath.split("?")[0];
    const { id, slug, page, ...other } = this.props.query;
    if (parseInt(this.props.query.page, 10) !== 1 || !this.props.query.page) {
      Router.push({
        pathname: pathname,
        query: {
          ...other,
          page: parseInt(this.props.query.page, 10) - 1
        },
        shallow: true
      });
    }
  };

  filterListForQuery = () => {
    const { filterItems } = this.state;
    let filterList = [];
    Object.keys(filterItems).forEach(item => {
      if (Array.isArray(filterItems[item])) {
        filterItems[item].forEach(val => {
          filterList.push({
            name: item,
            value: val
          });
        });
      } else {
        filterList.push({
          name: item,
          value: filterItems[item]
        });
      }
    });
    return filterList;
  };

  render() {
    const { query } = this.props;
    const { filterItemStatus } = this.state;
    const filterItems = this.filterListForQuery();
    return (
      <MainLayout section={2} bg="#F8F8F8">
        <Query
          query={GET_PRODUCT_LIST}
          variables={{
            page: query.page ? parseInt(query.page, 10) : 1,
            jump: 16,
            sort: query.sort || "",
            productName: query.text,
            partnerNames: query['magazin'],
            brands: query['brend'],
            features: filterItems.filter(
              x =>
                x.name !== "id" &&
                x.name !== "sort" &&
                x.name !== "page" &&
                x.name !== "magazin" &&
                x.name !== "text" &&
                x.name !== "brend" &&
                x.name !== "utm_source" &&
                x.name !== "utm_medium" &&
                x.name !== "utm_campaign" &&
                x.name !== "utm_content" &&
                x.name !== "utm_term"
            )
          }}
          notifyOnNetworkStatusChange={true}
        >
          {({ loading, data, error }) => {
            if (loading) return <div />;
            if (error) return <div />;
            return (
              <>
                <Head title={`${query.text} | 2step.me`} />
                <CatalogName>
                  Результаты поиска по запросу "{query.text}"
                </CatalogName>
                <Content>
                  <LeftContainer>
                    <FilterCollapse
                      isOpen={filterItemStatus}
                      onClick={this.filterItemHandler}
                      data={data.productFilter}
                      filterHandler={this.filterHandler}
                      onFillFilter={this.onFillFilter}
                      filterItems={filterItems}
                    />
                  </LeftContainer>
                  <RightContainer>
                    <SortBlock>
                      <SortLabel>Сортировать:</SortLabel>
                      <SortByText
                        active={
                          this.props.query.sort === "" ||
                          !Object.hasOwnProperty.bind(this.props.query)("sort")
                        }
                        onClick={() => this.selectHandler()}
                      >
                        По умолчанию
                      </SortByText>
                      <SortByText
                        active={this.props.query.sort === "BY_ASC"}
                        onClick={() => this.selectHandler(1)}
                      >
                        По возрастанию цены
                      </SortByText>
                      <SortByText
                        active={this.props.query.sort === "BY_DESC"}
                        onClick={() => this.selectHandler(2)}
                      >
                        По убыванию цены
                      </SortByText>
                      <SortByText
                        active={this.props.query.sort === "BY_POP"}
                        onClick={() => this.selectHandler(3)}
                      >
                        По популярности
                      </SortByText>
                    </SortBlock>
                    <ProductListWrap>
                      {data.productFilter.products.length === 0 && (
                        <NoProductFind>Ничего не найдено</NoProductFind>
                      )}
                      {!data.networkStatus !== 3 &&
                        data.productFilter.products &&
                        data.productFilter.products.map(val => {
                          return (
                            <ProductCardOne
                              key={val.id}
                              {...val}
                              catalog
                              loading={loading}
                            />
                          );
                        })}
                    </ProductListWrap>
                    <Pagination
                      totalPages={data.productFilter.totalPages}
                      onPrevPage={this.onPrevPage}
                      onNextPage={() => this.onNextPage(data.totalPages)}
                      onPageChange={this.onPageChange}
                      currentPage={this.props.query.page}
                    />
                  </RightContainer>
                </Content>
              </>
            );
          }}
        </Query>
      </MainLayout>
    );
  }
}

export default Search;
