import { useContext } from "react";

import Slider from "../../components/Slider/Slider";
import PaginatedItems from "../../components/PaginatedItems/PaginatedItems";
import Filter from "../../components/Filter/Filter";
import Category from "../../components/Category/Category";

import { ProductContext } from "../../context/ProductContext";

const Shop = () => {
  const { productList, isLoading } = useContext(ProductContext);

  return (
    <>
      <Slider />
      <Category />
      <Filter productList={productList} />
      {isLoading ? (
        <div className="d-flex justify-content-center fs-1 mt-5">
          <i className="fa-solid fa-spinner fa-spin-pulse"></i>
        </div>
      ) : (
        <PaginatedItems itemsPerPage={8} items={productList} />
      )}
    </>
  );
};

export default Shop;
