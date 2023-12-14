import React, { useEffect, useState } from "react";
import { fetchAllProducts } from "../services/ProductService";

const ProductContext = React.createContext();
// This also works: const UserContext = createContext();

const ProductProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchAllProducts();
      if (res) {
        setProductList(res);
      }
    };

    fetchData();
  }, []);

  return (
    <ProductContext.Provider value={{ productList }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
