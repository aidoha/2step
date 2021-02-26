import React, { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router'
import { Query } from 'react-apollo';
import { Wrap, Input, Button, SearchResult, SearchResultItem } from './style';
import { SEARCH } from './queries';
import SearchIcon from '../icons/search';

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState('');
  const onSearch = e => {
    if (e.key === 'Enter'){
      setSearchValue(e.target.value)
      Router.push(`/search/${searchValue}`)
    }
  }
  return (
    <Wrap>
      <Input
        type="search"
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
        onKeyDown={onSearch}
      />
      <Link href={`/search/${searchValue}`} prefetch passHref>
        <Button>
          <SearchIcon />
        </Button>
      </Link>
      <Query
        query={SEARCH}
        variables={{
          name: searchValue
        }}
      >
        {({ loading, data }) => {
          if (loading) return <div />;
          const { edges } = data.search;
          return (
            <SearchResult>
              {edges.map(val => {
                const { name, oid, slug } = val.node;
                return (
                  <Link href={`/product/${slug}/${oid}`}>
                    <SearchResultItem>{name}</SearchResultItem>
                  </Link>
                );
              })}
            </SearchResult>
          );
        }}
      </Query>
    </Wrap>
  );
};

export default SearchInput;
