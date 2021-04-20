import React from "react";
import { useLocation } from "react-router";
import { useQuery } from "@apollo/client";
import { SEARCH_PRODUCTS } from "../../graphql/queries";
import { StyledSearchResult } from "./StyledSearchResult";
import NoSearchResults from "../../components/NoSearchResults";
import ProductCard from "../../components/ProductCard";

function useQueryParams() {
  return new URLSearchParams(useLocation().search);
}

export default function SearchResult() {
  const query = useQueryParams();
  var products = []
  query.get("query");
  const { data } = useQuery(SEARCH_PRODUCTS, {
    variables: { name: query.get("query") },
  });
  if(data){
    products = data["searchProducts"];
  }

  return (
    <StyledSearchResult className="fondoDegradado">
      <div className="filterBar">
          {products.length >= 1 ?
        <ul>
            {products.map((item, i) => (
                <li key={item.id}>
                  <ProductCard item={item} />
                </li>
            ))
            }
        </ul>
          :
          <NoSearchResults/>
          }
      </div>
    </StyledSearchResult>
  );
}
