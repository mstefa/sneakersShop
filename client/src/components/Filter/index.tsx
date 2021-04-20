import React from "react";
import { StyledFilter } from "./StyledFilter";
import { useQuery, useLazyQuery } from "@apollo/client";
import {
  GET_CATEGORIES,
  GET_FILTERED_PRODUCTS,
  GET_BRANDS
} from "../../graphql/queries";
import Loader from "../Loader";

// typescript interface
interface filterAtribute {
  id: string;
  name: string;
  __typename: string;
}

export default function Filter({ setLoadedProduct, setFilterOfferts, filterOfferts }) {
  
  const [filters, setFilter] = React.useState({
    categories: [''],
    brands: ['']
    })

  const { data: catData, loading: catLoading, error: catError } = useQuery(GET_CATEGORIES, {});
  const { data: brandsData, loading: brandsLoading, error: brandsError } = useQuery(GET_BRANDS, {});
  const [
    getProducts,
    { data: productsData, loading: productsLoading },
  ] = useLazyQuery(GET_FILTERED_PRODUCTS);

  const handleCategoryFilter = (value) => {
    console.log([value])

    getProducts({
      variables: {
        categoryId : [value],
        brandId: filters.brands
      },
    });

    setFilter({ ...filters,
      categories:[value],
    })
  };

  const handleBrandFilter = (value) => {
    console.log([value])
    getProducts({
      variables: {
        categoryId : filters.categories,
        brandId: [value]
      },
    });

    setFilter({ ...filters,
      brands:[value],
    })

  };

  if (catLoading || brandsLoading ) {
    return <Loader />;
  }
  if (catError || brandsError ) {
    return <div>Something go wrong loading the filter bar</div>;
  }

  if(!productsLoading && !!productsData) {
    setLoadedProduct(productsData.filteredProducts)
  }

  const categories: filterAtribute[] = catData.categories;
  const brands: filterAtribute[] = brandsData.brand;

  return (
    <StyledFilter>
      
      <div className="filter" onClick={() => setFilterOfferts(!filterOfferts)}>
          {filterOfferts? <p className="sale"> All Products</p>:<p className="sale"> For sale!</p>}
      </div>
      <div className="filter">
        <select 
          onChange={(ev: React.ChangeEvent<HTMLSelectElement>): void =>
            handleCategoryFilter(ev.target.value)
          }
        >
          <option className="option" id="zzz" value="">
            All categories
          </option>
          {categories.map((e) => (
            <option className="option" id={e.name} value={e.id} key={e.id}>
              {e.name}{" "}
            </option>
          ))}
        </select>
      </div>
      <div className="filter">
        <select 
          onChange={(ev: React.ChangeEvent<HTMLSelectElement>): void =>
            handleBrandFilter(ev.target.value)
          }
        >
          <option className="option" id="zzz" value="">
            All brands
          </option>
          {brands.map((e) => (
            <option className="option" id={e.name} value={e.id} key={e.id}>
              {e.name}{" "}
            </option>
          ))}
        </select>
      </div>
    </StyledFilter>
  );
}
