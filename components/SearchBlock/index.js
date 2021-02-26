import {
  SearchResult,
  SearchResultItem,
  SearchResultItemLeft,
  SearchResultItemImg,
  SearchResultItemHeading,
  SearchResultItemPrice
} from "./style";
import toValidCost from "../toValidCost";

const SearchBlock = ({ data, active }) => {
  return (
    <SearchResult active={active}>
      {data.map(val => {
        const img = JSON.parse(val.node.mediaUrl).images;
        return (
          <SearchResultItem
            href={`/product?id=${val.node.oid}`}
            key={val.node.oid}
          >
            <SearchResultItemLeft>
              <SearchResultItemImg>
                <img src={img[0]} />
              </SearchResultItemImg>
              <SearchResultItemHeading>{val.node.name}</SearchResultItemHeading>
            </SearchResultItemLeft>
            <SearchResultItemPrice>
              {(val.node.minimalPrice &&
                `${toValidCost(val.node.minimalPrice)} ₸`) ||
                "Нет в наличии"}
            </SearchResultItemPrice>
          </SearchResultItem>
        );
      })}
    </SearchResult>
  );
};

export default SearchBlock;
