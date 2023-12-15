import React, { useEffect, useState } from "react";
import _ from "lodash";

import {
  fetchAllProducts,
  fetchProductsByCategory,
} from "../services/ProductService";

const ProductContext = React.createContext();
// This also works: const UserContext = createContext();

const ProductProvider = ({ children }) => {
  const [originalProductList, setOriginalProductList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const res = await fetchAllProducts();
    if (res) {
      setProductList(res);
      setOriginalProductList(res);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCategory = async (type) => {
    if (type === "all") {
      fetchData();
    } else {
      setIsLoading(true);

      const res = await fetchProductsByCategory(type);
      if (res) {
        setProductList(res);
      }
      setIsLoading(false);
    }
  };

  const handleFilter = (sortField, sortBy) => {
    let result = _.cloneDeep(productList);
    result = _.orderBy(result, [sortField], [sortBy]);
    setProductList(result);
  };

  return (
    <ProductContext.Provider
      value={{
        productList,
        setProductList,
        handleCategory,
        isLoading,
        handleFilter,
        originalProductList
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
